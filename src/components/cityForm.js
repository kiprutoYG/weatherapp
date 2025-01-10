import React, {useState} from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchForm = ({ onSearch }) => {
    const [city, setCity] = useState("");
    const [suggestions, setSuggestions] = useState([]); 
    const apiKey = "8057fae2f4a1910db7d33775e12ef772";

    const fetchSuggestion = async (query) => {
      if(!query){
        setSuggestions([]);
        return;
      }

      try{
        const response = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`);
        if(!response.ok){
          throw new Error("Failed to fetch suggestion")
        };
        const data = response.json();
        setSuggestions(data);
      }catch(error){
        console.error(error.message)
        setSuggestions([]);
      };
    };
  
    //input changes
    const handleInputChange = (e) => {
      const input = e.target.value;
      setCity(input);
      fetchSuggestion(input);
    }

    //suggestion selection
    const handleSuggestion = (suggestion) => {
      setCity(suggestion.name);
      setSuggestions([]);
      onSearch(suggestion.name);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) {
        onSearch(city);
        setCity("");
        setSuggestions([]);
      }
    };
  
    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white p-1 rounded-lg shadow-md animate-slideIn"
        >
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city"
            className="flex flex-col sm:flex-row gap-4 items-center p-3 flex-grow rounded-lg outline-secondary"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 shadow-md"
          >
            <SearchIcon className="h-8 w-8 text-white hover:animate-zoomIn" />
          </button>
        </form>

        {/*suggestions*/}
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li key={index}
              onClick={() => handleSuggestion}
              className="p-2 hover:bg-gray-100 cursor-pointer">
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SearchForm;