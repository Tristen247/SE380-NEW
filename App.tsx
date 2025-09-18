// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WeatherDrawer from './weather/WeatherDrawer';
import BatteryDrawer from './battery/BatteryDrawer';
import GalleryDrawer from './gallery/GalleryDrawer';
import FinalProjectDrawer from './FinalProject/FinalProjectDrawer';
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerPosition: 'right', swipeEdgeWidth: 150 }}
      >
        <Drawer.Screen name="Photo Gallery" component={GalleryDrawer} />
        <Drawer.Screen name="Weather App" component={WeatherDrawer} />
        <Drawer.Screen name="Battery" component={BatteryDrawer} />
        <Drawer.Screen name="Final Project" component={FinalProjectDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


