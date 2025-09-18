import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type { DrawerParamList } from './utils/drawerParamList';
import GhibliTabs from './GhibliTabs'; 

const Drawer = createDrawerNavigator<DrawerParamList>();

const FinalProjectDrawer = () => {
  return (
    <Drawer.Navigator
      
      screenOptions={{ headerShown: false, drawerPosition: 'left', swipeEdgeWidth: 100 }}
    >
      <Drawer.Screen
        name="Home"
        component={GhibliTabs}                 
        options={{ title: 'Ghibli Mini' }}     
      />
    </Drawer.Navigator>
  );
};

export default FinalProjectDrawer;
