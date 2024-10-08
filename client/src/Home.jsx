import React from "react";

const Home = () => {
  // console.log(import.meta.env.VITE_API_URL);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/auto-shop.jpg')] bg-gray-800 bg-blend-overlay bg-auto bg-no-repeat bg-top text-white py-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Auto Repair Shop
          </h1>
          <p className="text-lg mb-8">
            Your trusted partner for all automotive repair and maintenance
            needs.
          </p>
          <a
            href="/book"
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Oil Change</h3>
              <p className="text-gray-700">
                Regular oil changes keep your engine running smoothly. We use
                the best oils and filters.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Brake Repair</h3>
              <p className="text-gray-700">
                Ensure your safety on the road with our comprehensive brake
                repair services.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Tire Service</h3>
              <p className="text-gray-700">
                We offer tire rotations, balancing, and replacement for optimal
                vehicle performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "The best auto repair shop in town! Fast, reliable, and
                professional service every time."
              </p>
              <p className="font-semibold">- John D.</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "My car has never run better! Their brake service was
                top-notch."
              </p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                "Highly recommend this shop for their attention to detail and
                customer service."
              </p>
              <p className="font-semibold">- Mike W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-yellow-400 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-lg mb-8">
            Book an appointment today and experience the best automotive repair
            service in town!
          </p>
          <a
            href="/book"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
