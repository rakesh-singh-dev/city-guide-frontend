// // This is a mock AI service
// // In a real implementation, this would connect to an actual AI service

// export type AIQuestion = {
//   question: string;
//   cityName: string;
// };

// export const askAboutCity = async ({ question, cityName }: AIQuestion): Promise<string> => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   // Return mock responses based on keywords in the question
//   if (question.toLowerCase().includes('cost')) {
//     return `${cityName} has a varied cost of living depending on the neighborhood. The city center tends to be more expensive, with average rents for a one-bedroom apartment around €900-1200. Food costs are moderate compared to other European cities, and public transportation is affordable with monthly passes around €40-80.`;
//   }

//   if (question.toLowerCase().includes('transport') || question.toLowerCase().includes('transportation')) {
//     return `${cityName} has an excellent public transportation system including buses, metro/subway, and in some areas, trams or light rail. The city is also increasingly bike-friendly with dedicated cycling lanes in many parts. Most attractions and neighborhoods are well-connected by public transport.`;
//   }

//   if (question.toLowerCase().includes('culture') || question.toLowerCase().includes('art')) {
//     return `${cityName} has a rich cultural scene with numerous museums, galleries, theaters, and music venues. The city hosts several cultural festivals throughout the year, celebrating everything from film and music to local traditions and cuisine. The arts community is vibrant, with both historical heritage and contemporary creative expressions.`;
//   }

//   if (question.toLowerCase().includes('food') || question.toLowerCase().includes('restaurant')) {
//     return `${cityName} offers diverse culinary experiences, from local specialties to international cuisine. The food scene ranges from affordable street food to high-end restaurants. Local markets are great places to experience authentic flavors, and the city has several districts known for their particular food specialties.`;
//   }

//   if (question.toLowerCase().includes('weather') || question.toLowerCase().includes('climate')) {
//     return `${cityName}'s climate varies by season, with temperatures ranging from cool winters to warm summers. The city experiences moderate rainfall throughout the year. Spring and fall are particularly pleasant with mild temperatures ideal for exploring the city.`;
//   }

//   // Default response for other questions
//   return `${cityName} is a vibrant city with a rich history and culture. It offers a good quality of life with various amenities, cultural attractions, and a unique atmosphere. For more specific information about ${cityName}, please ask a more detailed question.`;
// };

export type AIQuestion = {
  question: string;
  cityName: string;
};

export const askAboutCity = async ({
  question,
  cityName,
}: {
  question: string;
  cityName: string;
}) => {
  try {
    const res = await fetch("https://city-guide-backend.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: question,
        city: cityName,
      }),
    });

    const data = await res.json();
    return data?.overview || "Sorry, no response from AI.";
  } catch (error) {
    console.error("Error talking to backend:", error);
    return "Something went wrong. Please try again later.";
  }
};
