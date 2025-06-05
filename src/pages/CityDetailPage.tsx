import React, { useEffect, useState } from 'react';
import { useRoute } from '../components/providers/NavigationProvider';
import { getCityById } from '../data/cities';
import CityDetail from '../components/cities/CityDetail';
import { City } from '../types';

const CityDetailPage: React.FC = () => {
  const { params } = useRoute();
  const [city, setCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (params.cityId) {
      // Simulate API call delay
      setIsLoading(true);
      setTimeout(() => {
        const cityData = getCityById(params.cityId);
        if (cityData) {
          setCity(cityData);
        }
        setIsLoading(false);
      }, 500);
    }
  }, [params.cityId]);
  
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-64 bg-gray-200 rounded-xl"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!city) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">City Not Found</h2>
        <p className="text-gray-600">The city you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  return <CityDetail city={city} />;
};

export default CityDetailPage;