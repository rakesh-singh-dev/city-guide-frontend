import React from 'react';
import { City } from '../../types';
import CityCard from './CityCard';

interface CityGridProps {
  cities: City[];
  loading?: boolean;
}

const CityGrid: React.FC<CityGridProps> = ({ cities, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-xl"></div>
            <div className="p-4 bg-white rounded-b-xl space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (cities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No cities found. Try adjusting your search.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default CityGrid;