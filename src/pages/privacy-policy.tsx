import React from 'react';
import AnimatedSection from '../components/common/AnimatedSection';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20">
      <AnimatedSection>
        <div className="bg-violet-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-violet-200 text-lg max-w-2xl">
              At Solution AI, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </AnimatedSection>

     <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">
  {[
    {
      title: "1. Introduction",
      content:
        "Solution AI (\"we\", \"our\", or \"us\") is dedicated to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI and IoT solutions.",
    },
    {
      title: "2. Information We Collect",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Device data (hardware model, OS, unique device identifiers)</li>
          <li>Usage data (interactions, preferences, analytics)</li>
        </ul>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide and maintain our services</li>
          <li>To improve user experience and service functionality</li>
          <li>To send important updates or security notifications</li>
        </ul>
      ),
    },
    {
      title: "4. Sharing Your Information",
      content:
        "We do not sell your personal data. We may share it with trusted partners and service providers only to the extent necessary to perform core functions and maintain our services.",
    },
    {
      title: "5. Data Security",
      content:
        "We implement robust technical and organizational measures to protect your personal data from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time.",
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. We will notify you about any significant changes by updating the effective date at the top of this page.",
    },
    {
      title: "8. Contact Us",
      content: (
        <>
          If you have any questions about this Privacy Policy or how we handle your data, please contact us at:{' '}
          <a href="mailto:privacy@solutionai.com" className="text-[#0fbdce] hover:underline font-medium">
            privacy@solutionai.com
          </a>
        </>
      ),
    },
  ].map(({ title, content }, idx) => (
    <section
      key={idx}
      className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-700 text-xl leading-relaxed">{content}</p>
    </section>
  ))}
</div>

    </div>
  );
};

export default PrivacyPolicy;
