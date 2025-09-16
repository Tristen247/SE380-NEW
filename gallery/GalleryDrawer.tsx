import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import type { GalleryDrawerParamList } from './utils/stackParamList';
import GalleryStack from './GalleryStack';

const InnerDrawer = createDrawerNavigator<GalleryDrawerParamList>();

export default function GalleryDrawer() {
  return (
    <InnerDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',   // outer drawer is right; keep this left
        swipeEdgeWidth: 120,
      }}
    >
      {/* single entry that renders the stack */}
      <InnerDrawer.Screen name="Gallery" component={GalleryStack} />
    </InnerDrawer.Navigator>
  );
}
