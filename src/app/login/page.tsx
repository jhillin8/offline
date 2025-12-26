'use client';

import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Mail, ArrowRight } from 'lucide-react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const searchParams = useSearchParams();
  const verify = searchParams.get('verify');
  const error = searchParams.get('error');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    await signIn('resend', {
      email,
      callbackUrl: '/',
      redirect: false,
    });

    setIsSent(true);
    setIsLoading(false);
  };

  // Check your email state
  if (isSent || verify) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-offline-red/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-offline-red" />
          </div>

          <h1 className="font-serif text-display-sm text-offline-black mb-4">
            Check your email
          </h1>

          <p className="text-offline-gray mb-8">
            We sent a sign-in link to{' '}
            <span className="text-offline-black font-medium">{email || 'your email'}</span>
          </p>

          <p className="text-sm text-offline-gray mb-8">
            Click the link in your email to access your guide. Check your spam folder if you don't see it.
          </p>

          <button
            onClick={() => {
              setIsSent(false);
              setEmail('');
            }}
            className="text-offline-red hover:underline text-sm"
          >
            Use a different email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-display-sm text-offline-black mb-2">
            Offline
          </h1>
          <p className="text-offline-gray">
            Your digital clean awaits
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 text-sm">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-offline-black mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoFocus
              className="w-full px-4 py-3 border border-offline-border rounded-lg
                         bg-white text-offline-black placeholder:text-offline-gray/50
                         focus:outline-none focus:ring-2 focus:ring-offline-red/20 focus:border-offline-red
                         transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full flex items-center justify-center gap-2 bg-offline-red text-white
                       py-3 px-6 rounded-lg font-medium
                       hover:bg-offline-red/90 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              'Sending...'
            ) : (
              <>
                Send sign-in link
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Help text */}
        <p className="text-center text-sm text-offline-gray mt-8">
          No password needed. We'll email you a magic link.
        </p>

        {/* Purchase link */}
        <div className="text-center mt-12 pt-8 border-t border-offline-border">
          <p className="text-sm text-offline-gray mb-2">
            Don't have access yet?
          </p>
          <a
            href="https://offlinelux.com"
            className="text-offline-red hover:underline text-sm font-medium"
          >
            Get the guide →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-offline-gray">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
