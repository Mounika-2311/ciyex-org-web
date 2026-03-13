import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

const directors = [
  { name: 'Kanneeswari Sivakumar', role: 'Director' },
  { name: 'Ciyahini Sivakumar', role: 'Director' },
  { name: 'Sivakumar Dhanapal', role: 'Director' },
  { name: 'Santhosh Sivakumar', role: 'Director' },
];

export default function About(): ReactNode {
  return (
    <Layout
      title="About Us"
      description="About Ciyex Inc. - A 501(c)(3) nonprofit building open source electronic health records for everyone.">
      <main className={styles.aboutPage}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <div className={styles.badges}>
                <span className={styles.badge}>501(c)(3) Nonprofit</span>
                <span className={styles.badgeState}>Wyoming Corporation</span>
              </div>
              <Heading as="h1" className={styles.heroTitle}>
                About Ciyex Inc.
              </Heading>
              <p className={styles.heroSubtitle}>
                Open source healthcare infrastructure for everyone, everywhere.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Our Mission
              </Heading>
              <div className={styles.missionCard}>
                <p className={styles.missionText}>
                  Ciyex Inc. is a 501(c)(3) nonprofit organization dedicated to building
                  modern, secure, and interoperable open source electronic health record
                  (EHR) systems. We believe that access to high-quality healthcare
                  technology should not be limited by cost or geography.
                </p>
                <p className={styles.missionText}>
                  Our mission is to empower public health initiatives globally by
                  providing a complete, HIPAA-compliant EHR platform that is free to use,
                  self-hostable, and built on open standards like FHIR R4 and HL7 v2. We
                  serve patients, clinics, hospitals, and healthcare organizations of all
                  sizes, from rural community health centers to large hospital networks.
                </p>
                <p className={styles.missionText}>
                  By making healthcare technology open source, we aim to reduce barriers
                  to adoption, promote data interoperability, and enable healthcare
                  providers to focus on what matters most: patient care.
                </p>
              </div>
            </div>
          </section>

          {/* Board of Directors Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Board of Directors
              </Heading>
              <div className={styles.directorsGrid}>
                {directors.map((director) => (
                  <div key={director.name} className={styles.directorCard}>
                    <div className={styles.directorAvatar}>
                      {director.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <h3 className={styles.directorName}>{director.name}</h3>
                    <p className={styles.directorRole}>{director.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Donate Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Support Our Mission
              </Heading>
              <div className={styles.donateCard}>
                <p className={styles.missionText}>
                  As a 501(c)(3) nonprofit, we rely on the generosity of our community
                  to build open source healthcare technology. Every contribution is
                  tax-deductible and goes directly to development.
                </p>
                <div className={styles.donateCta}>
                  <a
                    className={styles.donateBtn}
                    href="/donate"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Corporate Info Section */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Corporate Information
              </Heading>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f3e2;</div>
                  <h3 className={styles.infoLabel}>Registered Address</h3>
                  <p className={styles.infoValue}>
                    Ciyex Inc.<br />
                    30 N Gould St, Ste N<br />
                    Sheridan, WY 82801<br />
                    United States
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f4e7;</div>
                  <h3 className={styles.infoLabel}>Contact</h3>
                  <p className={styles.infoValue}>
                    <a href="mailto:help@ciyex.org" className={styles.infoLink}>
                      help@ciyex.org
                    </a>
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x1f4cb;</div>
                  <h3 className={styles.infoLabel}>Incorporation</h3>
                  <p className={styles.infoValue}>
                    State of Wyoming<br />
                    Incorporated January 12, 2026<br />
                    Filing #2026-001863987
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>&#x2696;&#xfe0f;</div>
                  <h3 className={styles.infoLabel}>Organization Type</h3>
                  <p className={styles.infoValue}>
                    501(c)(3) Nonprofit Corporation<br />
                    EIN: 41-3609665<br />
                    Licensed under AGPL-3.0
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
