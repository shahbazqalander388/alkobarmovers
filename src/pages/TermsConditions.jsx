import React from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../components/seo/JsonLd';

const TermsConditions = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Al Khobar Movers"
        description="Terms and Conditions for using Al Khobar Movers services. Please read these terms carefully before booking a move with us."
        keywords="terms and conditions, moving terms, service agreement, al khobar movers"
        canonical="/terms-conditions"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms-conditions' }]} />
      <WebPageJsonLd title="Terms & Conditions" description="Terms and Conditions for using Al Khobar Movers services." url="https://alkhobarmovers.com/terms-conditions" />

      <section className="pt-32 sm:pt-40 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg prose-headings:text-slate-900 prose-a:text-green-600 hover:prose-a:text-green-700">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Terms & Conditions</h1>
            <p className="text-slate-500 mb-8">Last updated: July 2026</p>

            <p>
              Welcome to Al Khobar Movers. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p>
              By accessing this website and booking our services, we assume you accept these terms and conditions. Do not continue to use Al Khobar Movers if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2>1. Service Agreement</h2>
            <p>
              When you book a move with Al Khobar Movers, you agree to provide accurate information regarding the volume of items, access conditions at both pickup and delivery locations, and any special handling requirements.
            </p>

            <h2>2. Pricing and Quotes</h2>
            <p>
              All quotes provided are based on the inventory and details provided by the customer. If the actual volume of goods or access conditions differ significantly on the day of the move, Al Khobar Movers reserves the right to adjust the final price accordingly.
            </p>

            <h2>3. Insurance and Liability</h2>
            <p>
              While we take the utmost care with your belongings, Al Khobar Movers offers basic transit insurance. Customers are responsible for declaring high-value items prior to the move. We are not liable for damage to items packed by the customer, or internal damage to electronics unless there is clear external damage to the casing.
            </p>

            <h2>4. Cancellations and Rescheduling</h2>
            <p>
              Cancellations or rescheduling requests must be made at least 48 hours prior to the scheduled move date. Late cancellations may incur a fee.
            </p>

            <h2>5. Customer Responsibilities</h2>
            <p>
              The customer must ensure that they or an authorized representative is present during the pickup and delivery of goods. It is the customer's responsibility to obtain any necessary permits for parking or building access.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              Payment is due upon completion of the moving service, unless otherwise agreed upon in writing. We accept cash and bank transfers.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any queries regarding any of our terms, please contact us at akhter90khan@gmail.com or call us at +966 50 815 5432.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TermsConditions;
