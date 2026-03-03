import React from "react";
import { Truck, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck size={40} />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery at your doorstep.",
    },
    {
      icon: <Clock size={40} />,
      title: "On-Time Service",
      desc: "We value your time with punctual delivery.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Packages",
      desc: "Your parcels are handled with full safety.",
    },
    {
      icon: <MapPin size={40} />,
      title: "Live Tracking",
      desc: "Track your order in real time easily.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl text-base-200 mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {features.map((item, index) => (
          <div key={index} className=" p-6 rounded-2xl">
            <div className="flex justify-center  mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            <p className="text-sm ">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
