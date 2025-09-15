// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherDrawer from './weather/WeatherDrawer';
import { View, Text } from 'react-native';
import BatteryDrawer from './battery/BatteryDrawer';

type NextProjectStackParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerPosition: 'right', swipeEdgeWidth: 150 }}
      >
        <Drawer.Screen name="Weather App" component={WeatherDrawer} />
        <Drawer.Screen name="Battery" component={BatteryDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// simple placeholder so it compiles
function NextProjectHomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Next Project Home</Text>
    </View>
  );
}
