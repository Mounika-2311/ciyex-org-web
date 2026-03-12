import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ── Inline SVG Icons ── */
const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const IconHeart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
    <path d="M12 6v4M10 8h4" />
  </svg>
);

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconCode = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const IconUsers = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconZap = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

/* ── Dashboard Mockup (CSS-only) ── */
function DashboardMockup() {
  return (
    <div className={styles.mockupWrapper}>
      <div className={styles.mockupWindow}>
        <div className={styles.mockupBar}>
          <span className={styles.dot} style={{ background: '#ff5f57' }} />
          <span className={styles.dot} style={{ background: '#febc2e' }} />
          <span className={styles.dot} style={{ background: '#28c840' }} />
          <span className={styles.mockupTitle}>Ciyex EHR Dashboard</span>
        </div>
        <div className={styles.mockupBody}>
          {/* Sidebar */}
          <div className={styles.mockSidebar}>
            <div className={styles.mockLogo} />
            {[...Array(6)].map((_, i) => (
              <div key={i} className={clsx(styles.mockNavItem, i === 0 && styles.mockNavActive)} />
            ))}
          </div>
          {/* Main Content */}
          <div className={styles.mockMain}>
            {/* Top Stats */}
            <div className={styles.mockStatsRow}>
              {['#06b6d4', '#10b981', '#8b5cf6', '#f59e0b'].map((color, i) => (
                <div key={i} className={styles.mockStatCard}>
                  <div className={styles.mockStatIcon} style={{ background: color }} />
                  <div className={styles.mockStatText}>
                    <div className={styles.mockStatValue} />
                    <div className={styles.mockStatLabel} />
                  </div>
                </div>
              ))}
            </div>
            {/* Chart area */}
            <div className={styles.mockChartArea}>
              <div className={styles.mockChartHeader} />
              <svg viewBox="0 0 400 120" className={styles.mockChart}>
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 Q50,60 100,65 T200,40 T300,55 T400,25 V120 H0 Z" fill="url(#chartGrad)" />
                <path d="M0,80 Q50,60 100,65 T200,40 T300,55 T400,25" fill="none" stroke="#06b6d4" strokeWidth="2" />
              </svg>
            </div>
            {/* Table rows */}
            <div className={styles.mockTable}>
              {[...Array(4)].map((_, i) => (
                <div key={i} className={styles.mockTableRow}>
                  <div className={styles.mockAvatar} />
                  <div className={styles.mockRowText} />
                  <div className={styles.mockRowBadge} />
                  <div className={styles.mockRowText2} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ── */
function HomepageHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          Open Source &middot; 501(c)(3) Nonprofit
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          The future of<br />
          <span className={styles.heroGradient}>healthcare technology.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          A complete, modern Electronic Health Records platform.
          HIPAA-compliant. FHIR R4 native. Free and open source.
        </p>
        <div className={styles.heroCta}>
          <Link className={styles.btnPrimary} to="/docs/intro">
            Get Started
          </Link>
          <Link className={styles.btnSecondary} to="https://github.com/ciyex-org/ciyex">
            View on GitHub &rarr;
          </Link>
        </div>
      </div>
      <DashboardMockup />
    </section>
  );
}

/* ── Features ── */
const features = [
  { icon: <IconShield />, title: 'HIPAA Secure', desc: 'Enterprise-grade encryption, audit logging, and role-based access control. Built for compliance from day one.' },
  { icon: <IconHeart />, title: 'FHIR R4 Native', desc: 'Built on HL7 FHIR R4 for seamless data exchange with any compliant system, EHR, or health information exchange.' },
  { icon: <IconZap />, title: 'Cloud Native', desc: 'Microservices on Kubernetes with auto-scaling and high availability for mission-critical healthcare operations.' },
  { icon: <IconUsers />, title: 'Patient Portal', desc: 'Empower patients with secure access to health records, scheduling, messaging, and prescription management.' },
  { icon: <IconCode />, title: 'Open Source', desc: 'AGPL-3.0 licensed. Full source access. Self-host or use our managed cloud. No vendor lock-in, ever.' },
  { icon: <IconGlobe />, title: 'Global Ready', desc: 'Multi-tenant, multi-language, and designed to serve clinics and hospitals of any size, anywhere in the world.' },
];

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <div className={styles.sectionLabel}>Built for healthcare</div>
        <Heading as="h2" className={styles.sectionTitle}>
          Everything your practice needs.
        </Heading>
        <p className={styles.sectionSubtitle}>
          From patient intake to billing, Ciyex EHR covers the full clinical workflow with modern tools built on open standards.
        </p>
        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Product Showcase (Apple-style alternating sections) ── */
function ShowcaseSection() {
  return (
    <>
      {/* Section 1: Clinical Workflows */}
      <section className={styles.showcase}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <div className={styles.sectionLabel}>Clinical Workflows</div>
            <Heading as="h2" className={styles.showcaseTitle}>
              Charting that<br />flows naturally.
            </Heading>
            <p className={styles.showcaseDesc}>
              Streamlined clinical documentation with smart templates,
              e-prescribing, lab orders, and voice-to-text. Designed by
              clinicians, for clinicians.
            </p>
            <Link className={styles.showcaseLink} to="/docs/features/clinical-docs">
              Learn more &rarr;
            </Link>
          </div>
          <div className={styles.showcaseVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCardHeader}>
                <div className={styles.visualCardDot} />
                <span>Patient Chart</span>
              </div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>Name</span><span className={styles.vcValue}>Sarah Johnson</span></div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>DOB</span><span className={styles.vcValue}>04/15/1985</span></div>
              <div className={styles.visualCardRow}><span className={styles.vcLabel}>MRN</span><span className={styles.vcValue}>CX-2024-0847</span></div>
              <div className={styles.visualCardDivider} />
              <div className={styles.visualVitals}>
                <div className={styles.vitalPill}><strong>120/80</strong><span>BP</span></div>
                <div className={styles.vitalPill}><strong>72</strong><span>HR</span></div>
                <div className={styles.vitalPill}><strong>98.6</strong><span>Temp</span></div>
                <div className={styles.vitalPill}><strong>99%</strong><span>SpO2</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interoperability */}
      <section className={clsx(styles.showcase, styles.showcaseReverse, styles.showcaseDark)}>
        <div className={styles.showcaseInner}>
          <div className={styles.showcaseText}>
            <div className={styles.sectionLabel}>Interoperability</div>
            <Heading as="h2" className={styles.showcaseTitle}>
              Connect with<br />everything.
            </Heading>
            <p className={styles.showcaseDesc}>
              FHIR R4 and HL7 v2 native. Exchange data seamlessly with labs,
              pharmacies, insurance payers, and other EHR systems. True
              interoperability, not just a checkbox.
            </p>
            <Link className={styles.showcaseLink} to="/docs/architecture/fhir-integration">
              Explore FHIR integration &rarr;
            </Link>
          </div>
          <div className={styles.showcaseVisual}>
            <div className={styles.interopVisual}>
              <div className={styles.interopCenter}>
                <img src="/img/Ciyex-logo-no-text.png" alt="Ciyex" width="40" height="40" />
              </div>
              {['Labs', 'Pharmacy', 'Insurance', 'HIE', 'Imaging', 'Billing'].map((label, i) => (
                <div key={i} className={styles.interopNode}>
                  <span>{label}</span>
                </div>
              ))}
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className={styles.interopLine} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Donate Section ── */
function DonateSection() {
  return (
    <section className={styles.donate}>
      <div className={styles.donateInner}>
        <div className={styles.sectionLabel}>501(c)(3) Nonprofit</div>
        <Heading as="h2" className={styles.donateTitle}>
          Help us build healthcare<br />
          <span className={styles.heroGradient}>for everyone.</span>
        </Heading>
        <p className={styles.donateDesc}>
          Ciyex is a nonprofit. Every dollar goes directly to building open source
          healthcare technology. Your donation is tax-deductible.
        </p>
        <div className={styles.donateThermometer}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '120px' }}>
            <iframe
              title="Donation thermometer powered by Zeffy"
              src="https://www.zeffy.com/embed/thermometer/ciyex-ehr"
              allowTransparency={true}
              style={{ position: 'absolute', border: 0, top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '120px' }}
            />
          </div>
        </div>
        <div className={styles.donateButtons}>
          <a
            className={styles.btnDonate}
            href="#"
            {...{'zeffy-form-link': 'https://www.zeffy.com/embed/donation-form/ciyex-ehr?modal=true'} as any}
          >
            Donate Now
          </a>
          <Link className={styles.btnGhost} to="/about">
            Learn about our mission &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <Heading as="h2" className={styles.ctaTitle}>
          Ready to modernize<br />your practice?
        </Heading>
        <p className={styles.ctaDesc}>
          Join the open source healthcare revolution. Free forever for nonprofits and community health centers.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.btnPrimary} to="/signup">
            Schedule a Demo
          </Link>
          <Link className={styles.btnGhost} to="/docs/installation/docker-setup">
            Self-Host Guide &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home(): ReactNode {
  return (
    <Layout
      title="Open Source EHR"
      description="Ciyex EHR - A 501(c)(3) nonprofit building open source Electronic Health Records. Modern, secure, FHIR-compliant, and built for healthcare interoperability.">
      <HomepageHero />
      <FeaturesSection />
      <ShowcaseSection />
      <DonateSection />
      <CtaSection />
    </Layout>
  );
}
