'use client';

import WaitlistForm from '@/components/WaitlistForm';

// ─── SVG Icon Components ───────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const CameraRollIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ScanTextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7 8h8M7 12h5" />
  </svg>
);

const TagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <path d="M7 7h.01" />
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const WifiOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 6C5 2 19 2 23 6" />
    <path d="M5 10a11.83 11.83 0 0 1 14 0" />
    <path d="M9 14a6 6 0 0 1 6 0" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const FeatherIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const ScreenshotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

// ─── Logo ──────────────────────────────────────────────────────────────────────

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div
      style={{
        width: '34px',
        height: '34px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #6C8CFF 0%, #A5BFFF 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0B0F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="13" x2="13" y2="13" />
      </svg>
    </div>
    <span
      style={{
        fontSize: '1.0625rem',
        fontWeight: 700,
        color: '#F0F0F5',
        letterSpacing: '-0.02em',
      }}
    >
      Screenshot Vault
    </span>
  </div>
);

// ─── Phone Mockup ──────────────────────────────────────────────────────────────

const PhoneMockup = () => (
  <div
    className="float-animation"
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* Ambient glow rings */}
    <div
      style={{
        position: 'absolute',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108, 140, 255, 0.12) 0%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108, 140, 255, 0.08) 0%, transparent 70%)',
        filter: 'blur(10px)',
      }}
    />

    {/* Phone frame */}
    <div
      className="shimmer-border"
      style={{
        width: '280px',
        borderRadius: '40px',
        padding: '14px',
        background: '#111118',
        border: '1px solid rgba(108, 140, 255, 0.2)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '30px',
          background: '#0B0B0F',
          borderRadius: '0 0 20px 20px',
          zIndex: 10,
        }}
      />

      {/* Screen */}
      <div
        style={{
          background: '#0B0B0F',
          borderRadius: '28px',
          overflow: 'hidden',
          minHeight: '500px',
          padding: '44px 16px 24px',
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            color: '#8B8BA0',
            marginBottom: '20px',
            paddingTop: '4px',
          }}
        >
          <span style={{ fontWeight: 600 }}>9:41</span>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="#8B8BA0">
              <rect x="0" y="4" width="2" height="6" rx="0.5" />
              <rect x="3" y="2" width="2" height="8" rx="0.5" />
              <rect x="6" y="0" width="2" height="10" rx="0.5" />
            </svg>
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="#8B8BA0" strokeWidth="1.5">
              <rect x="0.5" y="0.5" width="10" height="9" rx="1.5" />
              <rect x="11" y="3" width="1" height="4" rx="0.5" fill="#8B8BA0" />
              <rect x="1.5" y="1.5" width="7.5" height="7" rx="1" fill="#8B8BA0" />
            </svg>
          </div>
        </div>

        {/* App header */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '10px', color: '#55556A', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            Screenshot Vault
          </p>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#F0F0F5', letterSpacing: '-0.02em' }}>
            Your Screenshots
          </h3>
        </div>

        {/* Search bar */}
        <div
          style={{
            background: 'rgba(108, 140, 255, 0.08)',
            border: '1px solid rgba(108, 140, 255, 0.25)',
            borderRadius: '12px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '18px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6C8CFF" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ fontSize: '12px', color: '#6C8CFF', fontWeight: 500 }}>
            receipt from Amazon...
          </span>
          <div
            style={{
              width: '1.5px',
              height: '14px',
              background: '#6C8CFF',
              animation: 'blink 1s step-end infinite',
              marginLeft: 'auto',
            }}
          />
        </div>

        {/* Results label */}
        <p style={{ fontSize: '10px', color: '#55556A', marginBottom: '10px', fontWeight: 500 }}>
          3 matches found
        </p>

        {/* Screenshot cards */}
        {[
          { cat: 'Receipt', text: 'Amazon Order #114-8892', sub: 'Total: $47.99 • Aug 8', color: '#6C8CFF' },
          { cat: 'Chat', text: '"Don\'t forget the receipt..."', sub: 'WhatsApp • 2 days ago', color: '#7ECEC4' },
          { cat: 'Article', text: 'How to track Amazon returns', sub: 'Safari • 1 week ago', color: '#B89DFF' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              padding: '10px 12px',
              marginBottom: '8px',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: `rgba(${item.color === '#6C8CFF' ? '108, 140, 255' : item.color === '#7ECEC4' ? '126, 206, 196' : '184, 157, 255'}, 0.15)`,
                border: `1px solid rgba(${item.color === '#6C8CFF' ? '108, 140, 255' : item.color === '#7ECEC4' ? '126, 206, 196' : '184, 157, 255'}, 0.25)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '14px',
              }}
            >
              {item.cat === 'Receipt' ? '🧾' : item.cat === 'Chat' ? '💬' : '📰'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: 600,
                    color: item.color,
                    background: `rgba(${item.color === '#6C8CFF' ? '108, 140, 255' : item.color === '#7ECEC4' ? '126, 206, 196' : '184, 157, 255'}, 0.12)`,
                    padding: '1px 6px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.cat}
                </span>
              </div>
              <p style={{ fontSize: '11px', fontWeight: 500, color: '#E0E0E8', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.text}
              </p>
              <p style={{ fontSize: '10px', color: '#55556A' }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}</style>
  </div>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* ── NAV ───────────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          background: 'rgba(11, 11, 15, 0.85)',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />
          <a
            href="#waitlist-cta"
            className="btn-primary"
            style={{
              padding: '9px 20px',
              borderRadius: '10px',
              fontSize: '0.875rem',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Get early access
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section
        className="gradient-mesh grid-lines"
        style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-100px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108, 140, 255, 0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left — copy */}
          <div style={{ maxWidth: '560px' }}>
            <div className="tag-pill" style={{ display: 'inline-block', marginBottom: '28px' }}>
              Coming to Android
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: '#F0F0F5',
                marginBottom: '24px',
              }}
            >
              Find any{' '}
              <span className="gradient-text">screenshot.</span>
              <br />
              Instantly.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.6,
                color: '#8B8BA0',
                marginBottom: '40px',
                maxWidth: '480px',
              }}
            >
              Screenshot Vault reads the text in every screenshot on your phone,
              so you can search for it like Google — receipts, chats, articles,
              anything. No more endless scrolling.
            </p>

            <WaitlistForm variant="hero" />

            <p
              style={{
                fontSize: '0.8125rem',
                color: '#55556A',
                marginTop: '14px',
              }}
            >
              No credit card. No spam. Just early access.
            </p>

            {/* Social proof strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '44px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ display: 'flex', marginRight: '4px' }}>
                {['#6C8CFF', '#8BA4FF', '#A5BFFF', '#B89DFF'].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: color,
                      border: '2px solid #0B0B0F',
                      marginLeft: i > 0 ? '-8px' : '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                    }}
                  />
                ))}
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#8B8BA0' }}>
                <span style={{ color: '#F0F0F5', fontWeight: 600 }}>200+</span> people already on the list
              </p>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: '120px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#F0F0F5',
                marginBottom: '16px',
              }}
            >
              Your screenshots deserve better
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: '#8B8BA0',
                maxWidth: '480px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              You take screenshots because something matters. But finding them later is a nightmare.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {/* Problem */}
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '36px 32px',
                borderColor: 'rgba(255, 100, 100, 0.1)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(255, 100, 100, 0.08)',
                  border: '1px solid rgba(255, 100, 100, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  color: '#FF7B7B',
                }}
              >
                <CameraRollIcon />
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: '#FF7B7B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                The problem
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F0F0F5',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                Lost in your camera roll
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#8B8BA0', lineHeight: 1.65 }}>
                You saved that restaurant name, that tracking number, that code snippet. Now you&apos;re
                scrolling through 3,000 photos at 11pm trying to find it. Sound familiar?
              </p>
            </div>

            {/* Solution */}
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '36px 32px',
                borderColor: 'rgba(108, 140, 255, 0.15)',
                background: 'rgba(108, 140, 255, 0.04)',
              }}
            >
              <div
                className="feature-icon"
                style={{ marginBottom: '24px', color: '#6C8CFF' }}
              >
                <SearchIcon />
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: '#6C8CFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                The solution
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F0F0F5',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                Search by what it says
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#8B8BA0', lineHeight: 1.65 }}>
                Type a few words — any words from inside the screenshot — and Screenshot Vault surfaces
                exactly what you&apos;re looking for in under a second. Like Ctrl+F for your whole phone.
              </p>
            </div>

            {/* Privacy */}
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '36px 32px',
                borderColor: 'rgba(126, 206, 196, 0.1)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(126, 206, 196, 0.08)',
                  border: '1px solid rgba(126, 206, 196, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  color: '#7ECEC4',
                }}
              >
                <ShieldIcon />
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: '#7ECEC4',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                The difference
              </div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#F0F0F5',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                100% on-device, private
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#8B8BA0', lineHeight: 1.65 }}>
                Your screenshots contain your most personal moments. Screenshot Vault runs entirely
                on your phone — nothing is ever uploaded, shared, or sent anywhere. Period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '120px 24px',
          background: 'rgba(255,255,255,0.01)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#F0F0F5',
                marginBottom: '16px',
              }}
            >
              Set up once. Works forever.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: '#8B8BA0', maxWidth: '440px', margin: '0 auto', lineHeight: 1.6 }}>
              No manual tagging. No folders to create. No learning curve.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {[
              {
                num: '01',
                icon: <ScreenshotIcon />,
                title: 'Take a screenshot like normal',
                desc: "Nothing changes about how you use your phone. Screenshot something that matters — a price, a message, an address. Screenshot Vault watches quietly in the background.",
              },
              {
                num: '02',
                icon: <ScanTextIcon />,
                title: 'Vault reads the text automatically',
                desc: "The moment you take a screenshot, Screenshot Vault silently reads every word in it using on-device OCR. No cloud, no delay, no waiting. It just happens.",
              },
              {
                num: '03',
                icon: <SearchIcon />,
                title: 'Search anytime — find it instantly',
                desc: "Open Screenshot Vault and type anything you remember seeing. That receipt total, that person's name, that promo code. Found in under a second, every time.",
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#0B0B0F',
                  padding: '48px 40px',
                  position: 'relative',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = '#111118';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = '#0B0B0F';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '36px',
                    right: '36px',
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    color: 'rgba(108, 140, 255, 0.07)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {step.num}
                </div>
                <div
                  className="feature-icon"
                  style={{ marginBottom: '28px', color: '#6C8CFF' }}
                >
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: '#F0F0F5',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                    maxWidth: '220px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#8B8BA0',
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '120px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#F0F0F5',
                marginBottom: '16px',
              }}
            >
              Built to be the last
              <br />
              screenshot app you need
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: '#8B8BA0',
                maxWidth: '400px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Every feature is designed around one thing: getting you to your screenshot faster.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              {
                icon: <ScanTextIcon />,
                title: 'On-Device OCR',
                desc: 'Reads the text in every screenshot the moment you take it. No cloud processing, no internet required.',
                accent: '#6C8CFF',
              },
              {
                icon: <TagIcon />,
                title: 'AI Auto-Categorization',
                desc: 'Automatically sorts screenshots into smart categories — Receipts, Chats, Articles, Job Listings, Code Snippets, and more.',
                accent: '#B89DFF',
              },
              {
                icon: <SearchIcon />,
                title: 'Full-Text Search',
                desc: 'Search for any word, number, or phrase that appeared in any screenshot. Works exactly like a search engine for your phone.',
                accent: '#6C8CFF',
              },
              {
                icon: <LockIcon />,
                title: 'Private by Design',
                desc: "Your screenshots never touch a server. The AI runs entirely on your device. We can't see your data — even if we wanted to.",
                accent: '#7ECEC4',
              },
              {
                icon: <WifiOffIcon />,
                title: 'Works Offline',
                desc: "No connection? No problem. Screenshot Vault indexes and searches everything locally, so it works even in airplane mode.",
                accent: '#B89DFF',
              },
              {
                icon: <FeatherIcon />,
                title: 'Fast & Lightweight',
                desc: "Doesn't drain your battery or hog your storage. Built lean from the ground up to run efficiently in the background.",
                accent: '#6C8CFF',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: '18px',
                  padding: '32px 28px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `rgba(${feature.accent === '#6C8CFF' ? '108, 140, 255' :
                        feature.accent === '#B89DFF' ? '184, 157, 255' :
                          '126, 206, 196'
                      }, 0.1)`,
                    border: `1px solid rgba(${feature.accent === '#6C8CFF' ? '108, 140, 255' :
                        feature.accent === '#B89DFF' ? '184, 157, 255' :
                          '126, 206, 196'
                      }, 0.2)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '22px',
                    color: feature.accent,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: '#F0F0F5',
                    marginBottom: '10px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#8B8BA0',
                    lineHeight: 1.65,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACY CALLOUT ──────────────────────────────────────────────────── */}
      <section
        className="gradient-mesh-privacy"
        style={{
          padding: '120px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shield glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108, 140, 255, 0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Big shield icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'rgba(108, 140, 255, 0.08)',
              border: '1px solid rgba(108, 140, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
              boxShadow: '0 0 40px rgba(108, 140, 255, 0.1)',
              color: '#6C8CFF',
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <div className="tag-pill" style={{ display: 'inline-block', marginBottom: '24px' }}>
            Privacy first
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#F0F0F5',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            Your screenshots never
            <br />
            <span className="gradient-text">leave your phone.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#8B8BA0',
              lineHeight: 1.75,
              marginBottom: '56px',
              maxWidth: '580px',
              margin: '0 auto 56px',
            }}
          >
            Screenshots hold your most sensitive information — bank statements, medical results,
            private conversations, passwords you copied. We built Screenshot Vault on a simple
            promise: <strong style={{ color: '#F0F0F5', fontWeight: 600 }}>nothing leaves your device.</strong> Ever.
            The OCR runs on your phone. The AI runs on your phone. The search index lives on your phone.
            We have zero access to your data — not because of a policy, but because of how it&apos;s built.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            {[
              { label: 'No cloud upload', icon: '🚫' },
              { label: 'No account required', icon: '✓' },
              { label: 'No analytics on content', icon: '🔒' },
              { label: 'Works offline, always', icon: '📴' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(108, 140, 255, 0.05)',
                  border: '1px solid rgba(108, 140, 255, 0.12)',
                  borderRadius: '14px',
                  padding: '20px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#D0D0E0',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST CTA ─────────────────────────────────────────────────────── */}
      <section
        id="waitlist-cta"
        style={{
          padding: '120px 24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108, 140, 255, 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="section-divider" style={{ margin: '0 auto 24px' }} />

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#F0F0F5',
              marginBottom: '18px',
              lineHeight: 1.1,
            }}
          >
            Stop losing screenshots.
            <br />
            <span className="gradient-text">Start finding them.</span>
          </h2>

          <p
            style={{
              fontSize: '1.0625rem',
              color: '#8B8BA0',
              marginBottom: '44px',
              lineHeight: 1.65,
            }}
          >
            Join the waitlist and be the first to know when Screenshot Vault launches on Android.
          </p>

          <WaitlistForm variant="cta" />

          <p
            style={{
              fontSize: '0.8125rem',
              color: '#55556A',
              marginTop: '16px',
            }}
          >
            Be the first to know when we launch on Android.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '48px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div>
            <Logo />
            <p
              style={{
                fontSize: '0.875rem',
                color: '#55556A',
                marginTop: '10px',
              }}
            >
              Search your screenshots by what&apos;s inside them.
            </p>
          </div>
          <p
            style={{
              fontSize: '0.8125rem',
              color: '#55556A',
            }}
          >
            © {new Date().getFullYear()} Screenshot Vault. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
