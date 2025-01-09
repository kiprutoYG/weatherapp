import React, {useState} from "react";

const SearchForm = ({ onSearch }) => {
    const [city, setCity] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) {
        onSearch(city);
        setCity("");
      }
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white p-1 rounded-lg shadow-md"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-3 flex-grow rounded-l-lg outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    );
  };
  
  export default SearchForm;