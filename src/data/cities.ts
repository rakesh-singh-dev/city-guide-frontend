import { City } from '../types';

// This is mock data; in a real implementation, this would come from an API
export const cities: City[] = [
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    imageUrl: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'Barcelona, the cosmopolitan capital of Spain\'s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.',
    categories: {
      costOfLiving: {
        title: 'Cost of Living',
        description: 'Barcelona offers a moderate cost of living compared to other major European cities.',
        metrics: [
          { name: 'Monthly rent (1BR, city center)', value: '€900-1,200', comparisonValue: 'medium' },
          { name: 'Monthly utilities', value: '€150', comparisonValue: 'medium' },
          { name: 'Monthly public transport', value: '€40', comparisonValue: 'low' },
          { name: 'Meal at mid-range restaurant', value: '€15-25', comparisonValue: 'medium' },
        ]
      },
      culture: {
        title: 'Culture & Lifestyle',
        description: 'Barcelona has a vibrant cultural scene with influences from Catalan traditions and international communities.',
        metrics: [
          { name: 'Museums & Galleries', value: 'Numerous', description: 'Including the Picasso Museum and MACBA' },
          { name: 'Festivals', value: 'Year-round', description: 'La Mercè, Primavera Sound, Sonar' },
          { name: 'Nightlife', value: 'Vibrant', description: 'Active until early morning, especially in summer' },
          { name: 'Work-Life Balance', value: 'Excellent', comparisonValue: 'high' },
        ]
      },
      education: {
        title: 'Education',
        description: 'Barcelona offers quality education options from primary schools to internationally recognized universities.',
        metrics: [
          { name: 'International Schools', value: 'Multiple', description: 'American School, British School, etc.' },
          { name: 'Universities', value: 'High-ranking', description: 'UB, UPF, ESADE, IESE' },
          { name: 'Language Barrier', value: 'Moderate', description: 'Catalan and Spanish are primary, but English is widely spoken in educational settings' },
        ]
      },
      transportation: {
        title: 'Transportation',
        description: 'Barcelona has an excellent public transportation system with metro, buses, and trams.',
        metrics: [
          { name: 'Public Transport Quality', value: 'Excellent', comparisonValue: 'high' },
          { name: 'Walkability', value: 'Very High', comparisonValue: 'high' },
          { name: 'Cycling Infrastructure', value: 'Good', description: 'Bicing bike-sharing system available' },
          { name: 'Airport Connectivity', value: 'Excellent', description: 'El Prat Airport with international connections' },
        ]
      }
    }
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    imageUrl: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that\'s among the world\'s major commercial, financial and cultural centers.',
    categories: {
      costOfLiving: {
        title: 'Cost of Living',
        description: 'New York is known for its high cost of living, particularly in Manhattan.',
        metrics: [
          { name: 'Monthly rent (1BR, city center)', value: '$3,000-4,500', comparisonValue: 'high' },
          { name: 'Monthly utilities', value: '$150-200', comparisonValue: 'high' },
          { name: 'Monthly public transport', value: '$127', comparisonValue: 'medium' },
          { name: 'Meal at mid-range restaurant', value: '$30-50', comparisonValue: 'high' },
        ]
      },
      culture: {
        title: 'Culture & Lifestyle',
        description: 'A global cultural capital with world-class entertainment, arts, and dining.',
        metrics: [
          { name: 'Museums & Galleries', value: 'World-class', description: 'MoMA, Met, Guggenheim' },
          { name: 'Theater & Entertainment', value: 'Outstanding', description: 'Broadway, live music, comedy' },
          { name: 'Nightlife', value: 'Exceptional', description: '24/7 city that never sleeps' },
          { name: 'Work-Life Balance', value: 'Fast-paced', comparisonValue: 'medium' },
        ]
      },
      education: {
        title: 'Education',
        description: 'Home to prestigious universities and excellent schools.',
        metrics: [
          { name: 'Universities', value: 'Top-tier', description: 'NYU, Columbia, CUNY system' },
          { name: 'Public Schools', value: 'Varied', description: 'Including specialized high schools' },
          { name: 'Language Schools', value: 'Numerous', description: 'Multiple language learning options' },
        ]
      },
      transportation: {
        title: 'Transportation',
        description: 'Extensive public transit system with 24/7 subway service.',
        metrics: [
          { name: 'Public Transport Quality', value: 'Extensive', comparisonValue: 'high' },
          { name: 'Walkability', value: 'Excellent', comparisonValue: 'high' },
          { name: 'Cycling Infrastructure', value: 'Improving', description: 'Growing bike lane network' },
          { name: 'Airport Connectivity', value: 'Excellent', description: 'JFK, LaGuardia, Newark' },
        ]
      }
    }
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    imageUrl: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic \'Big Ben\' clock tower and Westminster Abbey.',
    categories: {
      costOfLiving: {
        title: 'Cost of Living',
        description: 'London is one of the most expensive cities globally, particularly for housing.',
        metrics: [
          { name: 'Monthly rent (1BR, city center)', value: '£1,800-2,500', comparisonValue: 'high' },
          { name: 'Monthly utilities', value: '£150-200', comparisonValue: 'high' },
          { name: 'Monthly public transport', value: '£150', comparisonValue: 'high' },
          { name: 'Meal at mid-range restaurant', value: '£20-35', comparisonValue: 'high' },
        ]
      },
      culture: {
        title: 'Culture & Lifestyle',
        description: 'Rich in history and modern culture, with world-class entertainment and dining.',
        metrics: [
          { name: 'Museums & Galleries', value: 'World-class', description: 'British Museum, Tate Modern' },
          { name: 'Theater', value: 'Outstanding', description: 'West End shows, Royal theaters' },
          { name: 'Nightlife', value: 'Diverse', description: 'Various scenes across different areas' },
          { name: 'Work-Life Balance', value: 'Good', comparisonValue: 'medium' },
        ]
      },
      education: {
        title: 'Education',
        description: 'Home to world-renowned universities and excellent schools.',
        metrics: [
          { name: 'Universities', value: 'World-class', description: 'UCL, Imperial, LSE' },
          { name: 'International Schools', value: 'Numerous', description: 'Multiple options available' },
          { name: 'Language Schools', value: 'Abundant', description: 'Many English language schools' },
        ]
      },
      transportation: {
        title: 'Transportation',
        description: 'Comprehensive public transport network with extensive coverage.',
        metrics: [
          { name: 'Public Transport Quality', value: 'Excellent', comparisonValue: 'high' },
          { name: 'Walkability', value: 'Very Good', comparisonValue: 'high' },
          { name: 'Cycling Infrastructure', value: 'Good', description: 'Santander Cycles available' },
          { name: 'Airport Connectivity', value: 'Excellent', description: 'Heathrow, Gatwick, Stansted' },
        ]
      }
    }
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    country: 'India',
    imageUrl: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'Bengaluru (formerly Bangalore) is the capital of India\'s southern Karnataka state. The center of India\'s high-tech industry, the city is also known for its parks and nightlife.',
    categories: {
      costOfLiving: {
        title: 'Cost of Living',
        description: 'Relatively affordable by international standards, but expensive for India.',
        metrics: [
          { name: 'Monthly rent (1BR, city center)', value: '₹20,000-35,000', comparisonValue: 'medium' },
          { name: 'Monthly utilities', value: '₹3,000-4,000', comparisonValue: 'low' },
          { name: 'Monthly public transport', value: '₹1,500', comparisonValue: 'low' },
          { name: 'Meal at mid-range restaurant', value: '₹500-800', comparisonValue: 'low' },
        ]
      },
      culture: {
        title: 'Culture & Lifestyle',
        description: 'A blend of traditional Indian culture and modern tech lifestyle.',
        metrics: [
          { name: 'Tech Scene', value: 'Exceptional', description: 'Silicon Valley of India' },
          { name: 'Parks & Lakes', value: 'Numerous', description: 'Known as Garden City' },
          { name: 'Food Scene', value: 'Diverse', description: 'Local and international cuisine' },
          { name: 'Work-Life Balance', value: 'Moderate', comparisonValue: 'medium' },
        ]
      },
      education: {
        title: 'Education',
        description: 'Major educational hub with numerous institutions.',
        metrics: [
          { name: 'Engineering Colleges', value: 'Numerous', description: 'Including IISc, top engineering colleges' },
          { name: 'International Schools', value: 'Many', description: 'Multiple options available' },
          { name: 'Research Institutes', value: 'High-quality', description: 'Leading research centers' },
        ]
      },
      transportation: {
        title: 'Transportation',
        description: 'Growing public transport system with metro expansion.',
        metrics: [
          { name: 'Public Transport Quality', value: 'Developing', comparisonValue: 'medium' },
          { name: 'Traffic Conditions', value: 'Challenging', comparisonValue: 'low' },
          { name: 'Metro System', value: 'Expanding', description: 'New lines under construction' },
          { name: 'Airport Connectivity', value: 'Good', description: 'Kempegowda International Airport' },
        ]
      }
    }
  },
  {
    id: 'new-delhi',
    name: 'New Delhi',
    country: 'India',
    imageUrl: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    overview: 'New Delhi is India\'s capital territory and a major metropolitan area. It\'s the seat of all three branches of government, mixing modern life with historical landmarks.',
    categories: {
      costOfLiving: {
        title: 'Cost of Living',
        description: 'Relatively affordable for a capital city, with varying costs across regions.',
        metrics: [
          { name: 'Monthly rent (1BR, city center)', value: '₹25,000-40,000', comparisonValue: 'medium' },
          { name: 'Monthly utilities', value: '₹4,000-5,000', comparisonValue: 'low' },
          { name: 'Monthly public transport', value: '₹1,500', comparisonValue: 'low' },
          { name: 'Meal at mid-range restaurant', value: '₹600-1,000', comparisonValue: 'low' },
        ]
      },
      culture: {
        title: 'Culture & Lifestyle',
        description: 'Rich historical heritage mixed with contemporary urban life.',
        metrics: [
          { name: 'Historical Sites', value: 'Abundant', description: 'Red Fort, Qutub Minar, Humayun\'s Tomb' },
          { name: 'Shopping', value: 'Excellent', description: 'Modern malls to traditional markets' },
          { name: 'Food Scene', value: 'Outstanding', description: 'Famous for street food and fine dining' },
          { name: 'Cultural Events', value: 'Frequent', description: 'Art, music, and cultural festivals' },
        ]
      },
      education: {
        title: 'Education',
        description: 'Major educational hub with prestigious institutions.',
        metrics: [
          { name: 'Universities', value: 'Top-tier', description: 'DU, JNU, IIT Delhi' },
          { name: 'Schools', value: 'Numerous', description: 'Public and private options' },
          { name: 'Research Centers', value: 'Multiple', description: 'Leading research institutions' },
        ]
      },
      transportation: {
        title: 'Transportation',
        description: 'Extensive public transport network with metro system.',
        metrics: [
          { name: 'Metro System', value: 'Excellent', comparisonValue: 'high' },
          { name: 'Bus Network', value: 'Extensive', comparisonValue: 'medium' },
          { name: 'Auto-rickshaws', value: 'Abundant', description: 'Common mode of transport' },
          { name: 'Airport Connectivity', value: 'Very Good', description: 'IGI Airport with international connections' },
        ]
      }
    }
  }
];

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const searchCities = (query: string): City[] => {
  if (!query) return cities;
  
  const lowercaseQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowercaseQuery) || 
    city.country.toLowerCase().includes(lowercaseQuery)
  );
};