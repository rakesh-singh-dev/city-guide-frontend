// This file contains the service for interacting with the AI backend to ask questions about cities.

import { API_BASE_URL } from "../config/apiConfig";

export type AIQuestion = {
  question: string;
  cityName: string;
};

export const askAboutCity = async ({
  question,
  cityName,
}: AIQuestion) => {
  try {
    const res = await fetch(`${API_BASE_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: question, city: cityName }),
    });

    const data = await res.json();
    return data?.overview || "Sorry, no response from AI.";
  } catch (error) {
    console.error("Error talking to backend:", error);
    return "Something went wrong. Please try again later.";
  }
};