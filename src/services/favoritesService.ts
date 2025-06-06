import { City } from "../types";

const FAVORITES_KEY = "cityscope_favorites";

export const getFavorites = (): City[] => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addFavorite = (city: City): void => {
  const current = getFavorites();
  if (!current.find((c) => c.id === city.id)) {
    current.push(city);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(current));
  }
};

export const removeFavorite = (id: string): void => {
  const filtered = getFavorites().filter((c) => c.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
};

export const isFavorite = (id: string): boolean => {
  return getFavorites().some((c) => c.id === id);
};
