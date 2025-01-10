const About = () => (
    <section id="about" className="bg-accent bg-opacity-60 text-white py-14">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-fadeIn hover:scale-105 transition-transform">About WeatherApp</h2>
        <p className="text-lg mb-8">
          WeatherApp is your reliable weather companion, providing real-time weather data for any city worldwide. Our mission is to keep you informed and prepared for every weather condition.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Accurate Data</h3>
            <p>
              Powered by OpenWeather API, we deliver precise and up-to-date weather information.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>
              Intuitive design ensures you find the information you need quickly and easily.
            </p>
          </div>
          <div>
          < h3 className="text-xl font-semibold mb-2">Production</h3>
            <p className="text-gray-600 mt-4 mb-8">
            Created by TriGIS, this is a solution that showcases the web development ability within the company
            </p>
          </div>
          
        </div>
        <div class="flex items-center py-5 text-2xl font-bold">
            <hr class="flex-grow"/>
              <span classname="">TriGIS</span>
            <hr class="flex-grow"/>
        </div>
      </div>
    </section>
  );

  export default About;