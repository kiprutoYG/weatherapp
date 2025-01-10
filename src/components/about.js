const About = () => (
    <section id="about" className="bg-accent bg-opacity-60 text-white pt-14">
      <div className="container mx-auto text-center">
        <h2 className="md:text-4xl sm:text-3xl font-extrabold mb-6 bg-clip-text animate-fadeIn hover:scale-105 transition-transform">About WeatherNow</h2>
        <p className="text-lg mb-8">
          WeatherNow is your reliable weather companion, providing real-time weather data for any city worldwide. Our mission is to keep you informed and prepared for every weather condition.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="md:text-3xl sm:text-2xl font-semibold mb-2">Accurate Data</h3>
            <p>
              Powered by OpenWeather API, we deliver precise and up-to-date weather information.
            </p>
          </div>
          <div>
            <h3 className="md:text-3xl sm:text-2xl font-semibold mb-2">User-Friendly</h3>
            <p>
              Intuitive design ensures you find the information you need quickly and easily.
            </p>
          </div>
          <div>
          < h3 className="md:text-3xl sm:text-2xl font-semibold mb-2">Production</h3>
            <p>
            Created by TriGIS, this is a solution that showcases the web development ability within the company
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  export default About;