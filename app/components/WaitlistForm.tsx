'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
}

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isHero = variant === 'hero';

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      if (!supabase) {
        setErrorMsg('Waitlist not configured yet. Please check back soon!');
        setStatus('error');
        return;
      }

      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        // Log all Supabase error fields explicitly — the object itself
        // logs as {} because PostgrestError properties are non-enumerable.
        console.error('Supabase error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });

        if (error.code === '23505') {
          // Unique constraint violation — already on the list
          setStatus('duplicate');
        } else if (error.code === '42P01') {
          // Table does not exist
          setErrorMsg("The waitlist table hasn't been created in Supabase yet. See setup instructions.");
          setStatus('error');
        } else if (error.code === '42501' || error.message?.toLowerCase().includes('rls') || error.message?.toLowerCase().includes('policy')) {
          // Row Level Security blocking the insert
          setErrorMsg('Insert blocked by Supabase RLS policy. Add an insert policy for the waitlist table.');
          setStatus('error');
        } else {
          setErrorMsg(`Something went wrong: ${error.message || 'Unknown error'}. Please try again.`);
          setStatus('error');
        }
        return;
      }

      setStatus('success');
    } catch (err) {
      console.error('Unexpected error:', err);
      setErrorMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="pop-in flex flex-col items-center gap-2">
        <div
          style={{
            background: 'rgba(108, 140, 255, 0.08)',
            border: '1px solid rgba(108, 140, 255, 0.25)',
            borderRadius: '16px',
            padding: isHero ? '20px 32px' : '16px 28px',
          }}
          className="text-center"
        >
          <p
            style={{
              fontSize: isHero ? '1.125rem' : '1rem',
              fontWeight: 600,
              color: '#F0F0F5',
            }}
          >
            You&apos;re on the list! 🎉
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#8B8BA0',
              marginTop: '4px',
            }}
          >
            We&apos;ll email you the moment Screenshot Vault launches.
          </p>
        </div>
      </div>
    );
  }

  if (status === 'duplicate') {
    return (
      <div className="pop-in flex flex-col items-center gap-2">
        <div
          style={{
            background: 'rgba(108, 140, 255, 0.08)',
            border: '1px solid rgba(108, 140, 255, 0.25)',
            borderRadius: '16px',
            padding: isHero ? '20px 32px' : '16px 28px',
          }}
          className="text-center"
        >
          <p
            style={{
              fontSize: isHero ? '1.125rem' : '1rem',
              fontWeight: 600,
              color: '#F0F0F5',
            }}
          >
            You&apos;re already on the list ✓
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#8B8BA0',
              marginTop: '4px',
            }}
          >
            We&apos;ll see you at launch. Keep an eye on your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: isHero ? 'flex-start' : 'center',
          maxWidth: '480px',
          margin: isHero ? '0' : '0 auto',
        }}
      >
        <input
          id={`waitlist-email-${variant}`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') {
              setStatus('idle');
              setErrorMsg('');
            }
          }}
          placeholder="your@email.com"
          className="input-field"
          style={{
            flex: 1,
            minWidth: '220px',
            padding: isHero ? '14px 18px' : '12px 16px',
            borderRadius: '12px',
            fontSize: '0.9375rem',
          }}
          disabled={status === 'loading'}
          aria-label="Email address for waitlist"
        />
        <button
          type="submit"
          id={`waitlist-submit-${variant}`}
          className="btn-primary"
          style={{
            padding: isHero ? '14px 24px' : '12px 22px',
            borderRadius: '12px',
            fontSize: '0.9375rem',
            whiteSpace: 'nowrap',
          }}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg
                style={{
                  width: '16px',
                  height: '16px',
                  animation: 'spin 1s linear infinite',
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56" />
              </svg>
              Joining...
            </span>
          ) : (
            'Join the waitlist'
          )}
        </button>
      </div>
      {status === 'error' && errorMsg && (
        <p
          style={{
            color: '#FF7B7B',
            fontSize: '0.8125rem',
            marginTop: '8px',
            paddingLeft: '4px',
          }}
        >
          {errorMsg}
        </p>
      )}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </form>
  );
}
