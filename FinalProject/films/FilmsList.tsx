import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { Film, FilmsStackParamList } from '../types';

type Props = NativeStackScreenProps<FilmsStackParamList, 'FilmsList'>;

export function FilmsList({ navigation }: Props) {
  const [data, setData] = useState<Film[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://ghibliapi.vercel.app/films');
      const films: Film[] = await res.json();
      setData(films.slice(0, 25));
    })();
  }, []);

  if (!data) return <View style={styles.center}><ActivityIndicator /></View>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            Haptics.selectionAsync();
            navigation.navigate('FilmDetail', { film: item });
          }}>
          <Image source={{ uri: item.image }} style={styles.thumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.subtle}>Release: {item.release_date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center:{ flex:1, alignItems:'center', justifyContent:'center' },
  list:{ padding:12 },
  card:{ flexDirection:'row', alignItems:'center', backgroundColor:'white', padding:10, borderRadius:12, marginBottom:10, elevation:2 },
  thumb:{ width:60, height:60, borderRadius:8, marginRight:10, backgroundColor:'#e5e7eb' },
  title:{ fontSize:16, fontWeight:'700', color:'#111827' },
  subtle:{ color:'#6b7280', marginTop:4 }
});
