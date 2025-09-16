import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PhotoDetailScreen from './screens/PhotoDetailScreen';
import FullScreenModal from './screens/FullScreenModal';
import type { GalleryStackParamList } from './utils/stackParamList';

const Stack = createNativeStackNavigator<GalleryStackParamList>();

export default function GalleryStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Photo Gallery' }} />
      <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
      <Stack.Screen
        name="FullScreenModal"
        component={FullScreenModal}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack.Navigator>
  );
}
