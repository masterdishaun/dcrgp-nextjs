import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DC Regent Group",
  description:
    "DC Regent Group Terms of Service. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight mb-8">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing or using the services provided by DC Regent Group
                ("Company", "we", "us", "our"), you agree to be bound by these
                Terms of Service ("Terms"), including all applicable laws and
                regulations governing the use of the services. If you do not agree
                with any of these terms, you are prohibited from using or accessing
                the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Description of Services
              </h2>
              <p className="text-gray-600">
                DC Regent Group provides venture building, advisory, and digital
                transformation services. Our services include but are not limited
                to: business strategy consulting, operations optimization,
                advisory retainers, and AI-powered solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-600">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>You have the legal capacity to enter into these Terms.</li>
                <li>You will not use the services for any illegal or unauthorized purpose.</li>
                <li>You will not violate any laws in your jurisdiction when using the services.</li>
                <li>You will not interfere with or disrupt the services or servers or networks connected to the services.</li>
                <li>You will comply with all applicable local, state, national, and international laws and regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600">
                All content, materials, and intellectual property rights related to
                our services, including but not limited to text, graphics, logos,
                images, and software, are the property of DC Regent Group or its
                licensors and are protected by applicable copyright and trademark
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600">
                In no event shall DC Regent Group, its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill,
                or other intangible losses, resulting from (i) your access to or
                use of or inability to access or use the services; (ii) any
                conduct or content of any third party on the services; (iii) any
                content obtained from the services; and (iv) unauthorized access,
                use or alteration of your transmissions or content, whether based on
                warranty, contract, tort (including negligence) or any other legal
                theory, whether or not we have been informed of the possibility of
                such damage, and even if a remedy set forth herein is found to
                have failed of its essential purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Indemnification
              </h2>
              <p className="text-gray-600">
                You agree to defend, indemnify and hold harmless DC Regent Group
                and its affiliates, and their respective directors, officers,
                employees, and agents from and against any and all claims,
                damages, obligations, losses, liabilities, costs or debt, and
                expenses (including but not limited to attorney's fees) arising
                from: (i) your use of and access to the services; (ii) your
                violation of any term of these Terms; (iii) your violation of
                any third-party right, including without limitation any copyright,
                property, or privacy right; or (iv) any claim that your use of the
                services caused damage to a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600">
                These Terms shall be governed and construed in accordance with the
                laws of the State of California, United States, without regard to
                its conflict of law provisions. Our failure to enforce any right
                or provision of these Terms will not be considered a waiver of
                those rights. If any provision of these Terms is held to be
                invalid or unenforceable by a court, the remaining provisions of
                these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600">
                DC Regent Group reserves the right, at its sole discretion, to
                modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days' notice prior to any
                new terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                Email: legal@dcrgp.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
