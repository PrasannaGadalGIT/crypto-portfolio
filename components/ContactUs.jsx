"use client";

export default function ContactUs() {
  return (
    <section id="contact" className="py-11 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or want to collaborate? Fill out the form below and we'll get back to you.
        </p>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-linear-to-r from-purple-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
