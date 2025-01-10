//create the navigation bar
const Navbar = () => (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 shadow-md h-24 sm:text-2xl md:text-3xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">WeatherNow</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className=" hover:text-yellow-300">Home</a></li>
          <li><a href="#forecast" className=" hover:text-yellow-300">Weather</a></li>
          <li><a href="#about" className=" hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className=" hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;