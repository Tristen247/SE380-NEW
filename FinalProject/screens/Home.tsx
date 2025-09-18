import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Project — Placeholder</Text>
      <Button title="Open inner drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center' },
  title:{ fontSize:20, fontWeight:'700' },
});
