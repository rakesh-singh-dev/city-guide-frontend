export interface CityWeather {
  temperature: string;
  condition: string;
  icon?: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  description: string;
  overview: string;
  categories: {
    [key: string]: CityCategory;
  };
  weather?: CityWeather;
}

export interface CityCategory {
  title: string;
  description: string;
  metrics: CityMetric[];
}

export interface CityMetric {
  name: string;
  value: string | number;
  description?: string;
  comparisonValue?: "high" | "medium" | "low";
}

export interface Question {
  id: string;
  text: string;
  cityId: string;
}

export interface Answer {
  id: string;
  questionId: string;
  text: string;
  sources: string[];
  isReviewed: boolean;
  reviewedBy?: string;
  reviewDate?: Date;
}
