import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Terms(): ReactNode {
  return (
    <Layout
      title="Terms of Service"
      description="Ciyex Inc. Terms of Service - Terms governing use of Ciyex EHR and related services.">
      <main style={{ padding: '60px 0', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Heading as="h1">Terms of Service</Heading>
          <p style={{ color: 'var(--cx-slate-500)', marginBottom: '2rem' }}>
            <strong>Effective Date:</strong> March 1, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> March 12, 2026
          </p>

          <p>
            These Terms of Service ("Terms") govern your use of the Ciyex EHR platform, website
            (<a href="https://ciyex.org">ciyex.org</a>), and related services (collectively, the "Services")
            provided by Ciyex Inc. ("Ciyex," "we," "us," or "our"), a 501(c)(3) nonprofit organization.
            By accessing or using our Services, you agree to be bound by these Terms.
          </p>

          <Heading as="h2">1. Acceptance of Terms</Heading>
          <p>
            By accessing or using our Services, you confirm that you are at least 18 years old (or the
            age of majority in your jurisdiction) and agree to comply with these Terms. If you are using
            the Services on behalf of an organization, you represent that you have authority to bind that
            organization to these Terms.
          </p>

          <Heading as="h2">2. Description of Services</Heading>
          <p>
            Ciyex provides an open source Electronic Health Records (EHR) platform licensed under
            AGPL-3.0. Our Services include:
          </p>
          <ul>
            <li>The Ciyex EHR cloud-hosted platform</li>
            <li>Self-hosted EHR software and documentation</li>
            <li>The Ciyex website and community forum</li>
            <li>Developer tools, APIs, and SDKs</li>
          </ul>

          <Heading as="h2">3. User Accounts</Heading>
          <p>
            To access certain features, you must create an account. You are responsible for maintaining
            the confidentiality of your credentials and for all activities under your account. You agree
            to provide accurate, current, and complete information and to notify us immediately of any
            unauthorized use.
          </p>

          <Heading as="h2">4. Acceptable Use</Heading>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services for any unlawful purpose or in violation of any applicable regulations (including HIPAA)</li>
            <li>Attempt to gain unauthorized access to any part of the Services or related systems</li>
            <li>Interfere with or disrupt the integrity or performance of the Services</li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Collect or harvest user data without consent</li>
            <li>Use the Services to store or process PHI without a valid Business Associate Agreement</li>
          </ul>

          <Heading as="h2">5. Healthcare Disclaimer</Heading>
          <p>
            Ciyex EHR is a software tool designed to assist healthcare providers. It is <strong>not</strong> a
            substitute for professional medical judgment. Ciyex does not provide medical advice, diagnosis,
            or treatment. Healthcare providers using Ciyex EHR are solely responsible for clinical decisions
            and compliance with applicable healthcare regulations.
          </p>

          <Heading as="h2">6. HIPAA and Compliance</Heading>
          <p>
            Healthcare organizations that process Protected Health Information (PHI) through Ciyex EHR must
            enter into a Business Associate Agreement (BAA) with Ciyex. The platform is designed to support
            HIPAA compliance, but covered entities remain responsible for their own compliance obligations.
          </p>

          <Heading as="h2">7. Open Source License</Heading>
          <p>
            The Ciyex EHR software is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
            Your use of the open source software is additionally governed by the terms of the AGPL-3.0 license,
            available at <a href="https://github.com/ciyex-org/ciyex/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">github.com/ciyex-org/ciyex</a>.
            In the event of a conflict between these Terms and the AGPL-3.0 license regarding the open source
            software, the AGPL-3.0 license shall prevail.
          </p>

          <Heading as="h2">8. Intellectual Property</Heading>
          <p>
            The Ciyex name, logo, and branding are trademarks of Ciyex Inc. The open source software is
            licensed under AGPL-3.0. All other content on the website (documentation, blog posts, design)
            is the property of Ciyex Inc. unless otherwise noted.
          </p>

          <Heading as="h2">9. Donations</Heading>
          <p>
            Donations to Ciyex Inc. are tax-deductible to the extent permitted by law. Donations are
            processed by Zeffy, a third-party payment processor. Donation refunds are handled on a
            case-by-case basis. Contact <a href="mailto:help@ciyex.org">help@ciyex.org</a> for refund requests.
          </p>

          <Heading as="h2">10. Disclaimer of Warranties</Heading>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. CIYEX DOES NOT WARRANT THAT THE SERVICES WILL
            BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
          </p>

          <Heading as="h2">11. Limitation of Liability</Heading>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CIYEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE
            SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO CIYEX IN THE TWELVE (12)
            MONTHS PRECEDING THE CLAIM.
          </p>

          <Heading as="h2">12. Indemnification</Heading>
          <p>
            You agree to indemnify, defend, and hold harmless Ciyex Inc., its directors, officers, and
            contributors from any claims, damages, losses, or expenses (including reasonable attorneys' fees)
            arising from your use of the Services or violation of these Terms.
          </p>

          <Heading as="h2">13. Termination</Heading>
          <p>
            We may suspend or terminate your access to the Services at any time for any reason, including
            violation of these Terms. Upon termination, your right to use the Services ceases immediately.
            Provisions that by their nature should survive termination shall remain in effect.
          </p>

          <Heading as="h2">14. Governing Law</Heading>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of
            Wyoming, without regard to its conflict of law provisions. Any disputes arising under these
            Terms shall be resolved in the courts of Sheridan County, Wyoming.
          </p>

          <Heading as="h2">15. Changes to Terms</Heading>
          <p>
            We may update these Terms from time to time. We will notify you of material changes by posting
            the updated Terms on this page with a revised date. Continued use of the Services after changes
            constitutes acceptance of the updated Terms.
          </p>

          <Heading as="h2">16. Contact Us</Heading>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Ciyex Inc.</strong></li>
            <li>30 N Gould St, Ste N</li>
            <li>Sheridan, WY 82801</li>
            <li>Email: <a href="mailto:help@ciyex.org">help@ciyex.org</a></li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
