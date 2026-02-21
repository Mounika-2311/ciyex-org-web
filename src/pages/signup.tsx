import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './signup.module.css';

export default function Signup(): ReactNode {
  return (
    <Layout
      title="Sign Up - It's Free"
      description="Sign up for Ciyex EHR - Schedule a free demo and get started with open source electronic health records.">
      <main className={styles.signupPage}>
        <div className="container">
          <div className={styles.signupCard}>
            <div className={styles.signupHeader}>
              <div className={styles.badges}>
                <span className={styles.badge}>Free</span>
                <span className={styles.badgeOpen}>Open Source</span>
              </div>
              <Heading as="h1" className={styles.title}>
                Get Started with Ciyex EHR
              </Heading>
              <p className={styles.subtitle}>
                Schedule a free consultation to learn how Ciyex EHR can transform
                your healthcare practice. Our team will walk you through setup,
                features, and answer any questions.
              </p>
            </div>
            <div className={styles.calendlyContainer}>
              <iframe
                src="https://calendly.com/ciyex/ehr?hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a meeting with Ciyex"
                className={styles.calendlyEmbed}
              />
            </div>
            <div className={styles.trustSection}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>&#x1f512;</span>
                <span>HIPAA Compliant</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>&#x1f4e6;</span>
                <span>Self-Hostable</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>&#x1f30d;</span>
                <span>501(c)(3) Nonprofit</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
