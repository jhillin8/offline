import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { checkCustomerAccess } from '@/lib/access';
import NoAccessMessage from '@/components/auth/NoAccessMessage';

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // No session = redirect to login (middleware should catch this, but belt + suspenders)
  if (!session?.user?.email) {
    redirect('/login');
  }

  // Check if user has active purchase
  const { hasAccess, reason } = await checkCustomerAccess(session.user.email);

  if (!hasAccess) {
    // Filter out 'active' since it's not a valid reason when hasAccess is false
    const deniedReason = reason !== 'active' ? reason : undefined;
    return <NoAccessMessage email={session.user.email} reason={deniedReason} />;
  }

  return <>{children}</>;
}
