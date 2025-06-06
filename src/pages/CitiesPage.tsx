// import React, { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import Input from "../components/ui/Input";
// import CityGrid from "../components/cities/CityGrid";
// import { searchCities } from "../data/cities";
// import { City } from "../types";
// import { API_BASE_URL } from "../config/apiConfig";

// const CitiesPage: React.FC = () => {
//   const [cities, setCities] = useState<City[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Simulate loading data
//     setIsLoading(true);
//     setTimeout(() => {
//       setCities(searchCities(""));
//       setIsLoading(false);
//     }, 500);
//   }, []);

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const localResults = searchCities(searchQuery);

//     if (localResults.length > 0) {
//       setCities(localResults);
//       setIsLoading(false);
//     } else {
//       try {
//         const res = await fetch(`${API_BASE_URL}/generate`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ city: searchQuery }),
//         });

//         const data: City = await res.json();
//         cities.push(data);
//         setCities([data]);
//       } catch (err) {
//         console.error("Error fetching from LLM:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="space-y-8 pb-16">
//       <div className="bg-blue-50 rounded-xl p-8 mb-8">
//         <h1 className="text-3xl font-bold mb-6">Explore Cities</h1>

//         <form onSubmit={handleSearch} className="flex gap-2 max-w-lg">
//           <Input
//             placeholder="Search by city or country..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             fullWidth
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white rounded-md px-4 flex items-center justify-center hover:bg-blue-600 transition-colors"
//           >
//             <Search className="h-5 w-5" />
//           </button>
//         </form>
//       </div>

//       <div>
//         <h2 className="text-2xl font-semibold mb-6">
//           {searchQuery ? `Results for "${searchQuery}"` : "All Cities"}
//         </h2>

//         <CityGrid cities={cities} loading={isLoading} />
//       </div>
//     </div>
//   );
// };

// export default CitiesPage;

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Input from "../components/ui/Input";
import CityGrid from "../components/cities/CityGrid";
import { searchCities } from "../data/cities";
import { City } from "../types";
import { API_BASE_URL } from "../config/apiConfig";
import { useNavigationState  } from "../components/providers/NavigationProvider";

// Simple global cache to persist last search result
let cachedCities: City[] = [];

const CitiesPage: React.FC = () => {
const navState = useNavigationState() as { newCity?: City };
const newCity = navState?.newCity;

  const [cities, setCities] = useState<City[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (newCity) {
      setCities([newCity]);
      cachedCities = [newCity];
      setIsLoading(false);
    } else if (cachedCities.length > 0) {
      setCities(cachedCities);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        const results = searchCities("");
        setCities(results);
        cachedCities = results;
        setIsLoading(false);
      }, 500);
    }
  }, [newCity]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const localResults = searchCities(searchQuery);

    if (localResults.length > 0) {
      setCities(localResults);
      cachedCities = localResults;
      setIsLoading(false);
    } else {
      try {
        const res = await fetch(`${API_BASE_URL}/generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city: searchQuery }),
        });

        const data: City = await res.json();
        setCities([data]);
        cachedCities = [data];
      } catch (err) {
        console.error("Error fetching from LLM:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <div className="bg-blue-50 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-6">Explore Cities</h1>

        <form onSubmit={handleSearch} className="flex gap-2 max-w-lg">
          <Input
            placeholder="Search by city or country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {searchQuery ? `Results for "${searchQuery}"` : "All Cities"}
        </h2>

        <CityGrid cities={cities} loading={isLoading} />
      </div>
    </div>
  );
};

export default CitiesPage;
