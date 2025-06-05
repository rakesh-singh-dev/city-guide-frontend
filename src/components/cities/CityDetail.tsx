import React, { useState } from "react";
import { City } from "../../types";
import { MapPin, Heart, Share2, MessageCircle, ArrowLeft } from "lucide-react";
import Button from "../ui/Button";
import Card, { CardContent, CardHeader } from "../ui/Card";
import { useNavigate } from "../providers/NavigationProvider";
import CityAIQuestion from "./CityAIQuestion";

interface CityDetailProps {
  city: City;
}

const CityDetail: React.FC<CityDetailProps> = ({ city }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(city.categories)[0]
  );
  const [showAIQuestion, setShowAIQuestion] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, this would save to user's favorites
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert(`Sharing ${city.name}`);
  };

  const handleBack = () => {
    navigate("/cities");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back to all cities</span>
        </button>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFavorite}
            className={isFavorite ? "text-red-500" : ""}
          >
            <Heart
              className={`h-4 w-4 mr-2 ${isFavorite ? "fill-red-500" : ""}`}
            />
            {isFavorite ? "Saved" : "Save"}
          </Button>

          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
        <img
          src={city.imageUrl}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            {city.name}
          </h1>
          <div className="flex items-center text-white/90 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{city.country}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Overview</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {city.overview
                  .replace(/\*\*/g, "") // remove bold markers
                  .replace(/\*/g, "") // remove bullet-like stars
                  .replace(/(?:Do you.*?)$/i, "") // remove ending questions
                  .trim()}
              </p>

              <div className="mt-6">
                <div className="border-b border-gray-200 mb-6">
                  <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
                    {Object.keys(city.categories).map((categoryKey) => (
                      <button
                        key={categoryKey}
                        onClick={() => setActiveCategory(categoryKey)}
                        className={`pb-2 px-1 whitespace-nowrap font-medium transition-colors
                                  ${
                                    activeCategory === categoryKey
                                      ? "text-blue-500 border-b-2 border-blue-500"
                                      : "text-gray-500 hover:text-gray-700"
                                  }`}
                      >
                        {city.categories[categoryKey].title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-medium mb-3">
                    {city.categories[activeCategory].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {city.categories[activeCategory].description}
                  </p>

                  <div className="space-y-4">
                    {city.categories[activeCategory].metrics.map(
                      (metric, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">
                              {metric.name}
                            </h4>
                            {metric.description && (
                              <p className="text-xs text-gray-500">
                                {metric.description}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center">
                            <span
                              className={`text-sm font-medium ${
                                metric.comparisonValue === "high"
                                  ? "text-green-600"
                                  : metric.comparisonValue === "low"
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {metric.value}
                            </span>

                            {metric.comparisonValue && (
                              <div
                                className={`ml-2 w-2 h-2 rounded-full ${
                                  metric.comparisonValue === "high"
                                    ? "bg-green-500"
                                    : metric.comparisonValue === "low"
                                    ? "bg-blue-500"
                                    : "bg-yellow-500"
                                }`}
                              />
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Have a Question?</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Ask our AI assistant about specific details of {city.name}.
              </p>
              <Button onClick={() => setShowAIQuestion(true)} fullWidth>
                <MessageCircle className="h-4 w-4 mr-2" />
                Ask AI Assistant
              </Button>
            </CardContent>
          </Card>

          {/* Additional components could be added here */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Weather</h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                Current conditions in {city.name}
              </p>

              {city.weather ? (
                <div className="flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {city.weather.temperature}
                    </div>
                    <div className="text-sm text-gray-500">
                      {city.weather.condition}
                    </div>
                    {city.weather.icon && (
                      <img
                        src={city.weather.icon}
                        alt={city.weather.condition}
                        className="mx-auto mt-2 w-12 h-12"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center text-sm text-gray-500 p-4">
                  Weather data not available
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {showAIQuestion && (
        <CityAIQuestion
          cityName={city.name}
          onClose={() => setShowAIQuestion(false)}
        />
      )}
    </div>
  );
};

export default CityDetail;
