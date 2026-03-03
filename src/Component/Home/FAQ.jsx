import React from "react";

export default function FAQ() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl text-secondary font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400  max-w-2xl mx-auto">
            Find answers to common questions about our services. If you still
            need help, feel free to contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-base-100 rounded-xl shadow-md">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              How does this posture corrector work?
            </div>
            <div className="collapse-content text-gray-600 leading-relaxed">
              A posture corrector provides gentle support to your shoulders and
              spine, helping you maintain proper alignment throughout the day
              and reducing strain on your back muscles.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-xl shadow-md">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-gray-600 leading-relaxed">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your registered email address.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-xl shadow-md">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-gray-600 leading-relaxed">
              Go to your account settings and select "Edit Profile" to update
              your personal information.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
