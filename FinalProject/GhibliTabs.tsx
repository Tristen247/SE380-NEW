import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesProvider } from './context/FavoritesContext';
import { FilmsList } from './films/FilmsList';
import { FilmDetail } from './films/FilmDetail';
import { FavoritesList } from './favorites/FavoritesList';
import type { GhibliTabParamList, FilmsStackParamList, FavoritesStackParamList } from './types';

const Tab = createBottomTabNavigator<GhibliTabParamList>();
const FilmsStack = createNativeStackNavigator<FilmsStackParamList>();
const FavStack = createNativeStackNavigator<FavoritesStackParamList>();

function FilmsNavigator() {
  return (
    <FilmsStack.Navigator>
      <FilmsStack.Screen name="FilmsList" component={FilmsList} options={{ title: 'Films' }} />
      <FilmsStack.Screen name="FilmDetail" component={FilmDetail} options={{ title: 'Details' }} />
    </FilmsStack.Navigator>
  );
}
function FavoritesNavigator() {
  return (
    <FavStack.Navigator>
      <FavStack.Screen name="FavoritesList" component={FavoritesList} options={{ title: 'Favorites' }} />
      <FavStack.Screen name="FilmDetail" component={FilmDetail} options={{ title: 'Details' }} />
    </FavStack.Navigator>
  );
}

export default function GhibliTabs() {
  return (
    <FavoritesProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const icon = route.name === 'FilmsTab' ? 'film-outline' : 'heart-outline';
            return <Ionicons name={icon as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="FilmsTab" component={FilmsNavigator} options={{ title: 'Films' }} />
        <Tab.Screen name="FavoritesTab" component={FavoritesNavigator} options={{ title: 'Favorites' }} />
      </Tab.Navigator>
    </FavoritesProvider>
  );
}
