import React from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbJsonLd, WebPageJsonLd } from '../components/seo/JsonLd';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Al Khobar Movers"
        description="Read the Privacy Policy of Al Khobar Movers. Learn how we collect, use, and protect your personal information during your relocation process."
        keywords="privacy policy, data protection, personal information, al khobar movers"
        canonical="/privacy-policy"
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]} />
      <WebPageJsonLd title="Privacy Policy" description="Read the Privacy Policy of Al Khobar Movers." url="https://alkhobarmovers.com/privacy-policy" />

      <section className="pt-32 sm:pt-40 pb-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-slate md:prose-lg prose-headings:text-slate-900 prose-a:text-green-600 hover:prose-a:text-green-700">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Privacy Policy</h1>
            <p className="text-slate-500 mb-8">Last updated: July 2026</p>

            <p>
              At Al Khobar Movers, accessible from https://alkhobarmovers.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Al Khobar Movers and how we use it.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information to provide better services to our users. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul>
              <li>Name and Contact Information (Email address, Phone number, Physical address)</li>
              <li>Moving details (Origin, Destination, Inventory)</li>
              <li>Communication records when you contact us for support or quotes</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our moving services</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you for customer service, to provide you with updates and quotes</li>
              <li>Send you emails regarding your move</li>
            </ul>

            <h2>Log Files</h2>
            <p>
              Al Khobar Movers follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2>Cookies</h2>
            <p>
              Like any other website, Al Khobar Movers uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at akhter90khan@gmail.com.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
