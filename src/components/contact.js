import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-accent bg-opacity-60 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-fadeIn hover:scale-105 transition-transform">Contact Us</h2>
        <p className="text-lg mb-8">
          Have questions or feedback? Connect with me through any of the options below.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.linkedin.com/in/elkana-kipruto-83769b303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.268c-1.035 0-1.732-.712-1.732-1.603 0-.91.716-1.603 1.766-1.603s1.732.692 1.732 1.603c0 .891-.697 1.603-1.766 1.603zm13.5 11.268h-3v-5.552c0-1.324-.473-2.23-1.656-2.23-.9 0-1.433.604-1.669 1.186-.086.211-.106.506-.106.8v5.796h-3v-10h3v1.381c.375-.569 1.047-1.381 2.552-1.381 1.898 0 3.379 1.24 3.379 3.906v6.094z" />
            </svg>
          </a>
          <a
            href="https://github.com/kiprutoYG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.24 1.839 1.24 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.761-1.606-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.521.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.654 1.655.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.816 1.106.816 2.229v3.305c0 .321.217.694.826.576 4.765-1.588 8.203-6.084 8.203-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="ygmodest@gmail.com"
            className="text-red-500 hover:text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.062l-10.504-8.062h21.008l-10.504 8.062zm11.504-8.511c-.011-.277-.064-.544-.149-.792-.182-.545-.506-.997-.953-1.301-.497-.34-1.118-.508-1.762-.463l-20 .004c-.644-.046-1.265.124-1.762.463-.447.304-.771.756-.953 1.301-.085.248-.138.515-.149.792l-.001 12.009c.011.277.064.544.149.792.182.545.506.997.953 1.301.497.34 1.118.508 1.762.463l20-.004c.644.046 1.265-.124 1.762-.463.447-.304.771-.756.953-1.301.085-.248.138-.515.149-.792l.001-12.009zm-11.5 11.443l-10.504-8.062h21.008l-10.504 8.062z" />
            </svg>
          </a>
          <p className="text-2xl">+254715 612 059</p>
        </div>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-try text-white text-center px-6 py-2 rounded-lg hover:bg-blue-800 gap-2 h-10 align-middle mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
