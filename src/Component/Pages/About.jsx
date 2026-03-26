import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
          alt="Delivery hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About GoDelivery
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Connecting people and businesses with fast, reliable, and secure
            delivery solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-5 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=870&auto=format&fit=crop"
          alt="Team working"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to make deliveries faster, safer, and easier for
            everyone. From local businesses to individual customers, we ensure
            your items reach their destination on time.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where distance is never a barrier. GoDelivery
            strives to be the most trusted delivery platform, bridging gaps
            between people, communities, and businesses.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {/* Card 1 */}
            <div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=200&auto=format&fit=crop"
                alt="Reliability"
                className="mx-auto mb-4 rounded-full w-30 h-30 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-500">
                Deliveries on time, every time, with consistent service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=200&auto=format&fit=crop"
                alt="Safety"
                className="mx-auto mb-4 rounded-full w-30 h-30 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-gray-500">
                Your packages are handled with utmost care and security.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1532619187608-e5375cab36aa?q=80&w=200&auto=format&fit=crop"
                alt="Innovation"
                className="mx-auto mb-4 rounded-full w-30 h-30 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-500">
                Constantly improving technology and services to serve you
                better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            {
              name: "Alice Johnson",
              role: "CEO",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Michael Smith",
              role: "CTO",
              img: "https://randomuser.me/api/portraits/men/46.jpg",
            },
            {
              name: "Emma Davis",
              role: "COO",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "David Lee",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Started with GoDelivery!
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-gray-300">
          Experience fast, reliable, and secure delivery service today.
        </p>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition">
          Start Now
        </button>
      </section>
    </div>
  );
}
