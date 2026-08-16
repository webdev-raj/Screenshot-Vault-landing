export default function PrivacyPolicy() {
    return (
      <main
        style={{
          backgroundColor: '#0B0B0F',
          color: '#F2F2F5',
          minHeight: '100vh',
          padding: '48px 20px',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#8B8B96', fontSize: 14, marginBottom: 40 }}>
            Last updated: August 16, 2026
          </p>
  
          <Section title="The short version">
            <p>
              Screenshot Vault reads the text in your screenshots so you can search
              them. That process happens entirely on your device. Your screenshots
              and the text inside them are never uploaded to our servers or anyone
              else&apos;s. The only thing that ever leaves your device is a short,
              already-sanitized snippet of text sent to an AI service to generate a
              category and title &mdash; and even that step strips out things like
              account numbers, OTPs, and transaction IDs first.
            </p>
          </Section>
  
          <Section title="What the app accesses">
            <p>
              Screenshot Vault requests access to your device&apos;s photo library,
              specifically to read screenshots. This permission is used only to:
            </p>
            <ul style={listStyle}>
              <li>Detect new screenshots automatically</li>
              <li>Extract the text they contain, using on-device text recognition</li>
              <li>Display thumbnails within the app</li>
            </ul>
            <p>
              The app does not access, read, or process any other photos or videos
              on your device &mdash; only items in your device&apos;s Screenshots
              album.
            </p>
          </Section>
  
          <Section title="What stays on your device">
            <p>Everything, by default. Specifically:</p>
            <ul style={listStyle}>
              <li>Your screenshot images themselves &mdash; never copied, uploaded, or transmitted anywhere</li>
              <li>The full text extracted from each screenshot (OCR results)</li>
              <li>Categories, titles, tags, and favorites you generate or set</li>
              <li>Your search history and app usage</li>
            </ul>
            <p>
              All of this is stored locally in a database on your device. We do not
              operate a server that stores your screenshots or their contents, and we
              cannot access this data remotely.
            </p>
          </Section>
  
          <Section title="What is sent off your device, and why">
            <p>
              To automatically categorize and title your screenshots, a short piece
              of the extracted text (not the image) is sent to a third-party AI
              service (Google Gemini) via our own backend. Before this happens:
            </p>
            <ul style={listStyle}>
              <li>
                The text is automatically scanned and redacted for common sensitive
                patterns &mdash; including OTP codes, masked account numbers,
                transaction/reference IDs, and card numbers &mdash; before it is
                sent anywhere
              </li>
              <li>
                Only the text needed for classification is sent &mdash; never the
                screenshot image itself
              </li>
              <li>
                This text is used only to generate a category, title, and tags for
                that screenshot, and is not stored by us after the request completes
              </li>
            </ul>
            <p>
              This redaction process is pattern-based and best-effort. While it
              covers common formats, we cannot guarantee it will catch every
              possible sensitive number format in every context.
            </p>
          </Section>
  
          <Section title="Waitlist and contact information">
            <p>
              If you sign up for our waitlist on this website, we collect the email
              address you provide. This is stored securely and used only to notify
              you about app availability and related updates. We do not sell or
              share this information with third parties for marketing purposes.
            </p>
          </Section>
  
          <Section title="Third-party services">
            <p>We rely on the following third-party services:</p>
            <ul style={listStyle}>
              <li>
                <strong>Google ML Kit</strong> &mdash; performs on-device text
                recognition. This runs locally and does not transmit your images or
                text to Google.
              </li>
              <li>
                <strong>Google Gemini API</strong> &mdash; receives redacted,
                text-only snippets (via our backend) to generate categories and
                titles.
              </li>
              <li>
                <strong>Supabase</strong> &mdash; stores waitlist email addresses
                collected through this website.
              </li>
            </ul>
          </Section>
  
          <Section title="Data deletion">
            <p>
              You can delete any individual screenshot&apos;s data from within the
              app at any time. Uninstalling the app removes all locally stored data,
              including the OCR text, categories, tags, and favorites database. This
              does not delete the original screenshot images from your device&apos;s
              photo library.
            </p>
          </Section>
  
          <Section title="Children's privacy">
            <p>
              Screenshot Vault is not directed at children under 13, and we do not
              knowingly collect personal information from children under 13.
            </p>
          </Section>
  
          <Section title="Changes to this policy">
            <p>
              We may update this privacy policy from time to time. Material changes
              will be reflected by an updated &ldquo;Last updated&rdquo; date at the
              top of this page.
            </p>
          </Section>
  
          <Section title="Contact">
            <p>
              Questions about this policy or how the app handles your data can be
              sent to{' '}
              <a
                href="mailto:codewithsapnap@gmail.com"
                style={{ color: '#6C8CFF' }}
              >
                codewithsapnap@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
    );
  }
  
  function Section({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
          {title}
        </h2>
        <div style={{ fontSize: 15, lineHeight: 1.7, color: '#C7C7D1' }}>
          {children}
        </div>
      </section>
    );
  }
  
  const listStyle: React.CSSProperties = {
    paddingLeft: 20,
    margin: '8px 0 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  };