import React, { useState } from 'react';
import { City } from '../../types';
import Card, { CardContent, CardHeader } from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { Search, X, PlusCircle } from 'lucide-react';
import { searchCities } from '../../data/cities';

interface CityComparisonProps {
  initialCities?: City[];
}

const CityComparison: React.FC<CityComparisonProps> = ({ initialCities = [] }) => {
  const [cities, setCities] = useState<City[]>(initialCities);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchCities(searchQuery);
      setSearchResults(results.filter(city => !cities.some(c => c.id === city.id)));
    } else {
      setSearchResults([]);
    }
  };
  
  const addCity = (city: City) => {
    if (cities.length < 3) {
      setCities([...cities, city]);
      setSearchQuery('');
      setSearchResults([]);
      setShowSearch(false);
    }
  };
  
  const removeCity = (cityId: string) => {
    setCities(cities.filter(city => city.id !== cityId));
  };
  
  // Categories to compare
  const compareCategories = ['costOfLiving', 'transportation', 'culture'];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Compare Cities</h2>
        {cities.length < 3 && !showSearch && (
          <Button onClick={() => setShowSearch(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add City
          </Button>
        )}
      </div>
      
      {showSearch && (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Find a city to compare</h3>
              <button onClick={() => setShowSearch(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {searchResults.length > 0 && (
              <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
                {searchResults.map(city => (
                  <div 
                    key={city.id} 
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center">
                      <div 
                        className="w-10 h-10 rounded-md overflow-hidden mr-3 bg-cover bg-center"
                        style={{ backgroundImage: `url(${city.imageUrl})` }}
                      />
                      <div>
                        <h4 className="font-medium">{city.name}</h4>
                        <p className="text-sm text-gray-500">{city.country}</p>
                      </div>
                    </div>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      onClick={() => addCity(city)}
                    >
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-4 text-center py-6">
                <p className="text-gray-500">No cities found matching your search.</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
      
      {cities.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500 mb-4">Add cities to compare their features side by side.</p>
          <Button onClick={() => setShowSearch(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add City
          </Button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-gray-200"></th>
                {cities.map(city => (
                  <th key={city.id} className="p-4 border-b border-gray-200">
                    <div className="flex flex-col items-center">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2">
                        <img 
                          src={city.imageUrl} 
                          alt={city.name} 
                          className="w-full h-full object-cover"
                        />
                        <button 
                          onClick={() => removeCity(city.id)}
                          className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-md"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <h3 className="font-bold">{city.name}</h3>
                      <p className="text-sm text-gray-500">{city.country}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareCategories.map(category => (
                <React.Fragment key={category}>
                  <tr className="bg-gray-50">
                    <td colSpan={cities.length + 1} className="p-4 font-medium">
                      {cities[0]?.categories[category]?.title || category}
                    </td>
                  </tr>
                  {cities[0]?.categories[category]?.metrics.map((metric, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="p-4 text-gray-700">{metric.name}</td>
                      {cities.map(city => (
                        <td key={`${city.id}-${idx}`} className="p-4 text-center">
                          {city.categories[category]?.metrics[idx] ? (
                            <div className="flex flex-col items-center">
                              <span 
                                className={`font-medium ${
                                  city.categories[category]?.metrics[idx].comparisonValue === 'high' ? 'text-green-600' : 
                                  city.categories[category]?.metrics[idx].comparisonValue === 'low' ? 'text-blue-600' : 
                                  'text-gray-700'
                                }`}
                              >
                                {city.categories[category]?.metrics[idx].value}
                              </span>
                              {city.categories[category]?.metrics[idx].description && (
                                <span className="text-xs text-gray-500 mt-1">
                                  {city.categories[category]?.metrics[idx].description}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-gray-400">N/A</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CityComparison;