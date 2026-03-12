import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './donate.module.css';

function DonateForm() {
  const [height, setHeight] = useState(820);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (!e.origin?.includes('zeffy.com') || !e.data) return;
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data.type === 'zeffy-embed:step-changed') {
          setHeight(1600);
        }
      } catch {
        // not JSON
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={styles.formEmbed} style={{ height }}>
      <iframe
        ref={iframeRef}
        title="Donate to Ciyex EHR"
        src="https://www.zeffy.com/embed/donation-form/ciyex-ehr"
        allowTransparency={true}
        style={{ border: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default function DonatePage() {
  return (
    <Layout
      title="Donate"
      description="Support Ciyex EHR, a 501(c)(3) nonprofit building open source healthcare technology. Every dollar is tax-deductible.">
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>501(c)(3) Nonprofit &middot; EIN 41-3609665</div>
          <Heading as="h1" className={styles.title}>
            Help us build healthcare<br />
            <span className={styles.gradient}>for everyone.</span>
          </Heading>
          <p className={styles.subtitle}>
            Ciyex is a nonprofit. Every dollar goes directly to building open source
            healthcare technology. Your donation is tax-deductible.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <DonateForm />
        </div>
      </section>

      <section className={styles.impact}>
        <div className={styles.impactInner}>
          <Heading as="h2" className={styles.impactTitle}>Where your donation goes</Heading>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Engineering</h3>
              <p>Full-time developers building FHIR-compliant, interoperable EHR features.</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Security & Compliance</h3>
              <p>HIPAA compliance, security audits, and SOC 2 certification.</p>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Community Health</h3>
              <p>Free deployments for community health centers and rural clinics.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
