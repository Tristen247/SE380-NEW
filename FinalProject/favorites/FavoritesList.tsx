import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFavorites } from '../context/FavoritesContext';
import { FavoritesStackParamList, Film } from '../types';

type Props = NativeStackScreenProps<FavoritesStackParamList, 'FavoritesList'>;

export function FavoritesList({ navigation }: Props) {
  const { favorites } = useFavorites();

  return (
    <FlatList
      data={favorites}
      keyExtractor={(it) => it.id}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.empty}>No favorites yet.</Text>}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => {
          const film: Film = { id: item.id, title: item.title, image: item.image, movie_banner: item.image, description: '', release_date: '', running_time: '' };
          navigation.navigate('FilmDetail', { film });
        }}>
          <Image source={{ uri: item.image }} style={styles.thumb} />
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list:{ padding:12 },
  empty:{ textAlign:'center', marginTop:40, color:'#6b7280' },
  card:{ flexDirection:'row', alignItems:'center', backgroundColor:'white', padding:10, borderRadius:12, marginBottom:10, elevation:2 },
  thumb:{ width:50, height:50, borderRadius:8, marginRight:10, backgroundColor:'#e5e7eb' },
  title:{ fontSize:16, fontWeight:'700', color:'#111827', flexShrink:1 },
});
