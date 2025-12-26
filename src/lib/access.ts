import { createServiceClient } from './supabase';

interface AccessCheckResult {
  hasAccess: boolean;
  reason?: 'active' | 'not_found' | 'refunded' | 'cancelled';
  purchasedAt?: string;
}

export async function checkCustomerAccess(email: string): Promise<AccessCheckResult> {
  const supabase = createServiceClient();

  const { data, error } = await supabase
    .from('customers')
    .select('status, purchased_at')
    .eq('email', email.toLowerCase().trim())
    .single();

  if (error) {
    // PGRST116 = no rows found
    if (error.code === 'PGRST116') {
      return { hasAccess: false, reason: 'not_found' };
    }
    console.error('Supabase query error:', error);
    throw error;
  }

  if (!data) {
    return { hasAccess: false, reason: 'not_found' };
  }

  if (data.status === 'active') {
    return {
      hasAccess: true,
      reason: 'active',
      purchasedAt: data.purchased_at,
    };
  }

  return {
    hasAccess: false,
    reason: data.status as 'refunded' | 'cancelled',
  };
}
