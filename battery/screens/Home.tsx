import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 12 }}>Battery Project Home</Text>
      <Button title="Open inner drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Go to Details (id=42)" onPress={() => navigation.navigate('Details', { id: '42' })} />
    </View>
  );
}
