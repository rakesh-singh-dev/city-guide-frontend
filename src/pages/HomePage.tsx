import React from 'react';
import Button from '../components/ui/Button';
import { MapPin, Search, BarChart3, MessageCircle } from 'lucide-react';
import { useNavigate } from '../components/providers/NavigationProvider';
import CityGrid from '../components/cities/CityGrid';
import { cities } from '../data/cities';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/80 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="City view" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Your Ideal City with AI-Powered Insights
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore comprehensive information about cities around the world, powered by our AI assistant that gives you accurate, up-to-date details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/cities')}
                className="bg-green text-blue-900 hover:bg-gray-100"
              >
                <Search className="h-5 w-5 mr-2" />
                Explore Cities
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/compare')}
                className="text-white border-white hover:bg-white/10"
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                Compare Cities
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 50L48 45.7C96 41.3 192 32.7 288 25.8C384 19 480 14 576 16.5C672 19 768 29 864 41.5C960 54 1056 69 1152 70.8C1248 72.7 1344 61.3 1392 55.7L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Use CityScope?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides accurate, up-to-date information about cities around the world, helping you make informed decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Data</h3>
            <p className="text-gray-600">
              Get detailed information about cost of living, culture, transportation, education, and more for cities worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Answers</h3>
            <p className="text-gray-600">
              Ask specific questions about any city and get instant, accurate responses powered by our governed AI system.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">City Comparison</h3>
            <p className="text-gray-600">
              Compare multiple cities side by side to find the perfect match for your lifestyle, career, or travel plans.
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Cities */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Cities</h2>
          <Button 
            variant="outline"
            onClick={() => navigate('/cities')}
          >
            View All
          </Button>
        </div>
        
        <CityGrid cities={cities.slice(0, 3)} />
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to explore?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
            Start your journey today and discover everything you need to know about cities around the world.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/cities')}
            className="bg-green text-blue-600 hover:bg-gray-100"
          >
            <MapPin className="h-5 w-5 mr-2" />
            Start Exploring
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;