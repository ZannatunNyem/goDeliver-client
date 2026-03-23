import React from "react";

//images
import cartoon1 from "../../assets/img/cartoon-1.webp";
import cartoon2 from "../../assets/img/cartoon-2.webp";
import cartoon3 from "../../assets/img/cartoon-3.webp";

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 border-t border-dotted border-gray-400">
      <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={cartoon1}
            alt="Live Parcel Tracking"
            className="rounded-xl shadow-lg w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 border-l-2 border-dotted border-gray-400 pl-6">
          <h3 className="text-2xl font-semibold mb-4">Live Parcel Tracking</h3>
          <p className="text-gray-600 leading-relaxed">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={cartoon2}
            alt="100% Safe Delivery"
            className="rounded-xl shadow-lg w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 border-l-2 border-dotted border-gray-400 pl-6">
          <h3 className="text-2xl font-semibold mb-4">100% Safe Delivery</h3>
          <p className="text-gray-600 leading-relaxed">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={cartoon3}
            alt="24/7 Call Center Support"
            className="rounded-xl shadow-lg w-64 h-64 md:w-80 md:h-80 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 border-l-2 border-dotted border-gray-400 pl-6">
          <h3 className="text-2xl font-semibold mb-4">
            24/7 Call Center Support
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </section>
  );
}
