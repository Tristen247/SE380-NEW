import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoriteItem } from '../types';

type Ctx = {
  favorites: FavoriteItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => Promise<void>;
};

const KEY = '@ghibli_favorites';
const C = createContext<Ctx | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then(raw => setFavorites(raw ? JSON.parse(raw) : []));
  }, []);

  const persist = (next: FavoriteItem[]) => {
    setFavorites(next);
    return AsyncStorage.setItem(KEY, JSON.stringify(next));
  };

  const isFavorite = useCallback((id: string) => favorites.some(f => f.id === id), [favorites]);

  const toggleFavorite = useCallback(async (item: FavoriteItem) => {
    const exists = isFavorite(item.id);
    const next = exists ? favorites.filter(f => f.id !== item.id) : [item, ...favorites];
    await persist(next);
  }, [favorites, isFavorite]);

  return <C.Provider value={{ favorites, isFavorite, toggleFavorite }}>{children}</C.Provider>;
}

export const useFavorites = () => {
  const v = useContext(C);
  if (!v) throw new Error('useFavorites must be used within FavoritesProvider');
  return v;
};
