import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DC Regent Group",
  description:
    "DC Regent Group Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Introduction
              </h2>
              <p className="text-gray-600">
                DC Regent Group ("we", "our", "us") respects your privacy and is
                committed to protecting your personal data. This privacy notice
                will inform you about how we look after your personal data when
                you visit our website (regardless of where you visit it from) and
                tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Important Information and Who We Are
              </h2>
              <p className="text-gray-600">
                DC Regent Group is the data controller and responsible for your
                personal data (collectively referred to as "Company", "we", "us", or
                "our" in this privacy notice).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                The Data We Collect About You
              </h2>
              <p className="text-gray-600">
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed (anonymous
                data).
              </p>
              <p className="text-gray-600 mt-4">
                We may collect, use, store and transfer different kinds of personal
                data about you which we have grouped together follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                <li>Usage Data includes information about how you use our website, products and services.</li>
                <li>Marketing and Communications Data includes your preferences in receiving marketing from us and your communication preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                How We Use Your Personal Data
              </h2>
              <p className="text-gray-600">
                We will only use your personal data when the law allows us to. Most
                commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Disclosures of Your Personal Data
              </h2>
              <p className="text-gray-600">
                We may have to share your personal data with the parties set out
                below for the purposes set out in the table above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Data Security
              </h2>
              <p className="text-gray-600">
                We have put in place appropriate security measures to prevent your
                personal data from being accidentally lost, used or accessed in an
                unauthorised way, altered or disclosed. In addition, we limit
                access to your personal data to those employees, agents,
                contractors and other third parties who have a business need to
                know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Data Retention
              </h2>
              <p className="text-gray-600">
                We will only retain your personal data for as long as necessary to
                fulfil the purposes we collected it for, including for the purposes
                of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Your Legal Rights
              </h2>
              <p className="text-gray-600">
                Under certain circumstances, you have rights under data protection
                laws in relation to your personal data. You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this privacy notice or our data
                protection practices, please contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                Email: privacy@dcrgp.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
