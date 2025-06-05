import React from 'react';
import CityComparison from '../components/cities/CityComparison';

const ComparisonPage: React.FC = () => {
  return (
    <div className="space-y-8 pb-16">
      <div className="bg-blue-50 rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Compare Cities</h1>
        <p className="text-gray-600">
          Compare up to 3 cities side by side to find the perfect match for your needs.
        </p>
      </div>
      
      <CityComparison />
    </div>
  );
};

export default ComparisonPage;