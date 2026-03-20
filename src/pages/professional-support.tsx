import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './professional-support.module.css';

const vendors = [
  {
    name: 'Qiaben Health',
    company: 'Qiaben LLC',
    tier: 1,
    description:
      'At Qiaben, we make Ciyex EHR work smoothly for your practice with easy-to-use, customized solutions and reliable support.',
    services: [
      'Custom solutions tailored to your practice',
      'HIPAA-compliant hosting with 99.9% uptime',
      'Data migration & system integration',
      '24/7 support availability',
      'Training & ongoing maintenance',
      'Azure / AWS cloud deployment',
      'Security & compliance assistance',
    ],
    coverage: ['United States', 'India'],
    address: '1309 Coffeen Avenue, STE 1200, Sheridan, WY 82801',
    email: 'info@qiaben.com',
    phone: '+1 (844) 874-2236',
    website: 'https://qiaben.com',
    booking: 'https://calendly.com/qiaben/ciyex',
  },
];

function VendorCard({ vendor }: { vendor: (typeof vendors)[0] }): ReactNode {
  return (
    <div className={styles.vendorCard}>
      <div className={styles.vendorHeader}>
        <div>
          <h3 className={styles.vendorName}>{vendor.name}</h3>
          <p className={styles.vendorCompany}>{vendor.company}</p>
        </div>
        <span className={styles.tierBadge}>Tier {vendor.tier}</span>
      </div>

      <p className={styles.vendorDescription}>{vendor.description}</p>

      <div className={styles.vendorDetails}>
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>Services</h4>
          <ul className={styles.serviceList}>
            {vendor.services.map((service) => (
              <li key={service} className={styles.serviceItem}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>Coverage</h4>
          <div className={styles.coverageTags}>
            {vendor.coverage.map((region) => (
              <span key={region} className={styles.coverageTag}>
                {region}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>Contact</h4>
          <div className={styles.contactInfo}>
            <p>{vendor.address}</p>
            <p>
              <a href={`mailto:${vendor.email}`} className={styles.contactLink}>
                {vendor.email}
              </a>
            </p>
            <p>
              <a href={`tel:${vendor.phone.replace(/\s/g, '')}`} className={styles.contactLink}>
                {vendor.phone}
              </a>
            </p>
            <p>
              <a
                href={vendor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}>
                {vendor.website}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.vendorActions}>
        <a
          href={vendor.booking}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookingBtn}>
          Book a Free Consultation
        </a>
        <a
          href={vendor.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.websiteBtn}>
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default function ProfessionalSupport(): ReactNode {
  return (
    <Layout
      title="Professional Support"
      description="Find certified professional support vendors for Ciyex EHR - hosting, customization, training, and implementation services.">
      <main className={styles.supportPage}>
        <div className="container">
          {/* Hero Section */}
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <div className={styles.badges}>
                <span className={styles.badge}>Certified Partners</span>
              </div>
              <Heading as="h1" className={styles.heroTitle}>
                Professional Support
              </Heading>
              <p className={styles.heroSubtitle}>
                Need help deploying, customizing, or maintaining Ciyex EHR? These
                vetted partners provide professional services with transparent pricing
                and no long-term contracts.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                How It Works
              </Heading>
              <div className={styles.stepsGrid}>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>1</div>
                  <h3 className={styles.stepTitle}>Choose a Partner</h3>
                  <p className={styles.stepText}>
                    Browse our vetted professional support vendors below.
                  </p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>2</div>
                  <h3 className={styles.stepTitle}>Book a Consultation</h3>
                  <p className={styles.stepText}>
                    Schedule a free call to discuss your needs and get a quote.
                  </p>
                </div>
                <div className={styles.stepCard}>
                  <div className={styles.stepNumber}>3</div>
                  <h3 className={styles.stepTitle}>Get Started</h3>
                  <p className={styles.stepText}>
                    Your partner handles setup, training, and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vendors */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <Heading as="h2" className={styles.sectionTitle}>
                Support Partners
              </Heading>
              <div className={styles.vendorList}>
                {vendors.map((vendor) => (
                  <VendorCard key={vendor.name} vendor={vendor} />
                ))}
              </div>
            </div>
          </section>

          {/* Become a Partner CTA */}
          <section className={styles.section}>
            <div className={styles.sectionInner}>
              <div className={styles.ctaCard}>
                <Heading as="h2" className={styles.ctaTitle}>
                  Become a Support Partner
                </Heading>
                <p className={styles.ctaText}>
                  Are you an IT services company experienced with EHR systems?
                  Join our partner program and help healthcare organizations
                  succeed with Ciyex EHR.
                </p>
                <a href="mailto:help@ciyex.org" className={styles.ctaBtn}>
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
