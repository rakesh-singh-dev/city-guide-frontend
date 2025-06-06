import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import CityGrid from '../components/cities/CityGrid';
//import { cities } from '../data/cities';
import { City } from '../types';
import { getFavorites } from "../services/favoritesService";

const FavoritesPage: React.FC = () => {
  // In a real app, this would fetch from a database or local storage
  const [favorites, setFavorites] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // useEffect(() => {
  //   // Simulate loading data - in a real app this would be fetched from storage
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     // For demo purposes, we'll just show a couple of cities as favorites
  //     setFavorites([cities[0], cities[2]]);
  //     setIsLoading(false);
  //   }, 500);
  // }, []);
  useEffect(() => {
  setIsLoading(true);
  setTimeout(() => {
    const stored = getFavorites();
    setFavorites(stored);
    setIsLoading(false);
  }, 300);
}, []);
  
  return (
    <div className="space-y-8 pb-16">
      <div className="bg-blue-50 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Favorite Cities</h1>
        <p className="text-gray-600">
          Cities you've saved for quick access.
        </p>
      </div>
      
      {favorites.length === 0 && !isLoading ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h2>
          <p className="text-gray-600 mb-6">
            Save cities you're interested in to access them quickly later.
          </p>
        </div>
      ) : (
        <CityGrid cities={favorites} loading={isLoading} />
      )}
    </div>
  );
};

export default FavoritesPage;