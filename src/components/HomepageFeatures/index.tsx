import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'FHIR R4 Compliant',
    icon: '\u{1F517}',
    description: (
      <>
        Built on HL7 FHIR R4 standards for seamless healthcare data exchange.
        Connect with any FHIR-compliant system, EHR, or health information exchange.
      </>
    ),
  },
  {
    title: 'HIPAA Secure',
    icon: '\u{1F512}',
    description: (
      <>
        Enterprise-grade security with encryption at rest and in transit,
        audit logging, role-based access control, and full HIPAA compliance.
      </>
    ),
  },
  {
    title: 'Modern Architecture',
    icon: '\u{26A1}',
    description: (
      <>
        Cloud-native microservices architecture with Kubernetes deployment,
        auto-scaling, and high availability for mission-critical healthcare operations.
      </>
    ),
  },
  {
    title: 'Patient Portal',
    icon: '\u{1F464}',
    description: (
      <>
        Empower patients with secure access to their health records,
        appointment scheduling, messaging, and prescription management.
      </>
    ),
  },
  {
    title: 'Clinical Workflows',
    icon: '\u{1F4CB}',
    description: (
      <>
        Streamlined clinical workflows for patient intake, charting,
        e-prescribing, lab orders, and billing integration.
      </>
    ),
  },
  {
    title: 'Open Source',
    icon: '\u{1F49A}',
    description: (
      <>
        AGPL-3.0 licensed with full source code access. Self-host on your
        infrastructure or use our managed cloud service.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Features</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Why Choose Ciyex EHR?
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need to run a modern healthcare practice, built on open standards and designed for interoperability.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
