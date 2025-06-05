import React, { useState } from 'react';
import { Search, MapPin, Menu, X } from 'lucide-react';
import Input from '../ui/Input';
import { useNavigate } from '../providers/NavigationProvider';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };
  
  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigate('/')}
          >
            <MapPin className="h-6 w-6 text-blue-500 mr-2" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
              CityScope
            </h1>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button 
              onClick={() => handleNavigate('/')}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigate('/cities')}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Cities
            </button>
            <button 
              onClick={() => handleNavigate('/compare')}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Compare
            </button>
            <button 
              onClick={() => handleNavigate('/favorites')}
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Favorites
            </button>
          </nav>
          
          <form onSubmit={handleSearch} className="relative">
            <Input 
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pr-10"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input 
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                fullWidth
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
            
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigate('/')}
                className="text-gray-600 hover:text-blue-500 transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigate('/cities')}
                className="text-gray-600 hover:text-blue-500 transition-colors py-2"
              >
                Cities
              </button>
              <button 
                onClick={() => handleNavigate('/compare')}
                className="text-gray-600 hover:text-blue-500 transition-colors py-2"
              >
                Compare
              </button>
              <button 
                onClick={() => handleNavigate('/favorites')}
                className="text-gray-600 hover:text-blue-500 transition-colors py-2"
              >
                Favorites
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;