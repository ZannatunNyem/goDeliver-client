import React from "react";

export default function OurService() {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="py-18 bg-accent mx-10 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-secondary font-bold text-center mb-5">
          Our Services
        </h2>
        <p className=" text-secondary text-center mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero{" "}
          <br />
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="
bg-secondary p-6 rounded-2xl text-center
shadow-2xl
transform-gpu
hover:scale-105 
transition-all duration-300 ease-out
"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-sm  leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
