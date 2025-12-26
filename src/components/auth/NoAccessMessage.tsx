'use client';

import { signOut } from 'next-auth/react';
import { AlertCircle, Mail, ArrowRight } from 'lucide-react';

interface NoAccessMessageProps {
  email: string;
  reason?: 'not_found' | 'refunded' | 'cancelled';
}

export default function NoAccessMessage({ email, reason = 'not_found' }: NoAccessMessageProps) {
  const messages = {
    not_found: {
      title: 'No purchase found',
      description: 'We couldn\'t find an active purchase for this email.',
    },
    refunded: {
      title: 'Purchase refunded',
      description: 'Your purchase was refunded and access has been revoked.',
    },
    cancelled: {
      title: 'Access cancelled',
      description: 'Your access has been cancelled.',
    },
  };

  const { title, description } = messages[reason];

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-offline-border/50 flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-8 h-8 text-offline-gray" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-display-sm text-offline-black mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-offline-gray mb-2">{description}</p>
        <p className="text-offline-black font-medium mb-8">{email}</p>

        {/* Help card */}
        <div className="bg-white border border-offline-border rounded-xl p-6 mb-8 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-offline-red" />
            <h3 className="font-medium text-offline-black">Purchased with a different email?</h3>
          </div>
          <p className="text-sm text-offline-gray mb-4">
            If you used a different email at checkout, try signing in with that email instead.
          </p>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="w-full flex items-center justify-center gap-2 bg-offline-black text-white
                       py-2.5 px-4 rounded-lg text-sm font-medium
                       hover:bg-offline-black/90 transition-colors"
          >
            Try a different email
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Support link */}
        <div className="space-y-3">
          <a
            href="mailto:support@offlinelux.com?subject=Access%20Issue&body=Email%20used:%20${encodeURIComponent(email)}"
            className="inline-block text-offline-red hover:underline text-sm"
          >
            Contact support
          </a>

          {reason === 'not_found' && (
            <div className="pt-4 border-t border-offline-border">
              <p className="text-sm text-offline-gray mb-2">
                Need to purchase?
              </p>
              <a
                href="https://offlinelux.com"
                className="text-offline-red hover:underline text-sm font-medium"
              >
                Get the guide →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
