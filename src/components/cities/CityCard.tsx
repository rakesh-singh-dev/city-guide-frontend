import React from 'react';
import { City } from '../../types';
import Card from '../ui/Card';
import { MapPin } from 'lucide-react';
import { useNavigate } from '../providers/NavigationProvider';

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // navigate(`/city/${city.id}`);
    navigate(`/city/${city.id}`, { state: { city } });

  };
  
  return (
    <Card hover onClick={handleClick} className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={city.imageUrl} 
          alt={city.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-semibold">{city.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{city.country}</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm line-clamp-3">{city.overview}</p>
      </div>
      <div className="px-4 pb-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {Object.keys(city.categories).slice(0, 3).map((key) => (
            <span 
              key={key} 
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {city.categories[key].title}
            </span>
          ))}
          {Object.keys(city.categories).length > 3 && (
            <span className="text-xs text-gray-500">+{Object.keys(city.categories).length - 3} more</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CityCard;