// import React from 'react';
// import CityComparison from '../components/cities/CityComparison';

// const ComparisonPage: React.FC = () => {
//   return (
//     <div className="space-y-8 pb-16">
//       <div className="bg-blue-50 rounded-xl p-8 mb-8">
//         <h1 className="text-3xl font-bold mb-2">Compare Cities</h1>
//         <p className="text-gray-600">
//           Compare up to 3 cities side by side to find the perfect match for your needs.
//         </p>
//       </div>

//       <CityComparison />
//     </div>
//   );
// };

// export default ComparisonPage;

import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { API_BASE_URL } from "../config/apiConfig";
import { City } from "../types";
import ComparisonGrid from "../components/comparison/ComparisonGrid";

const ComparisonPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddCity = async () => {
    if (!searchTerm || cities.length >= 3) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city: searchTerm }),
      });
      const city: City = await res.json();
      if (city && city.id && !cities.find((c) => c.id === city.id)) {
        setCities((prev) => [...prev, city]);
        setSearchTerm("");
      }
    } catch (err) {
      console.error("Error fetching city:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveCity = (id: string) => {
    setCities((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-8 pb-16">
      <div className="bg-blue-50 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Compare Cities</h1>
        <p className="text-gray-600">Compare up to 3 cities side by side.</p>

        <div className="mt-4 flex items-center gap-2 max-w-md">
          <div className="flex-1">
            <Input
              placeholder="Enter city name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
          </div>
          <Button
            className="h-10"
            onClick={handleAddCity}
            disabled={loading || cities.length >= 3}
          >
            + Add City
          </Button>
        </div>
      </div>

      {cities.length > 0 ? (
        <ComparisonGrid cities={cities} onRemoveCity={handleRemoveCity} />
      ) : (
        <p className="text-center text-gray-600">
          Add cities to compare their features side by side.
        </p>
      )}
    </div>
  );
};

export default ComparisonPage;
