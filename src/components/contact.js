const Contact = () => (
    <section id="contact" className="bg-blue-800 text-white py-12">
      <div className="relative text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-6">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-l-lg focus:outline-none"
          />
          <button className="bg-yellow-500 text-white p-3 rounded-r-lg hover:bg-yellow-600">
            Subscribe
          </button>
        </form>
        <p className="mt-4">Follow us on social media for updates!</p>
      </div>
    </section>
  );

  export default Contact;