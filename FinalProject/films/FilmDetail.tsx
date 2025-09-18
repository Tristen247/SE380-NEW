import React, { useMemo, useRef } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { useFavorites } from '../context/FavoritesContext';
import { FavoriteItem, FilmsStackParamList } from '../types';

type Props = NativeStackScreenProps<FilmsStackParamList, 'FilmDetail'>;

export function FilmDetail({ route }: Props) {
  const { film } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(film.id);
  const scale = useRef(new Animated.Value(1)).current;

  const payload: FavoriteItem = useMemo(() => ({
    id: film.id, title: film.title, image: film.image
  }), [film]);

  const pop = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 1.2, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  const onToggle = async () => {
    await toggleFavorite(payload);
    Haptics.notificationAsync(fav ? Haptics.NotificationFeedbackType.Warning
                                  : Haptics.NotificationFeedbackType.Success);
    pop();
  };

  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <Image source={{ uri: film.movie_banner }} style={styles.banner} />
      <View style={styles.row}>
        <Text style={styles.title}>{film.title}</Text>
        <TouchableOpacity onPress={onToggle} style={styles.heartWrap}>
          <Animated.Text style={[styles.heart, { transform: [{ scale }] }]}>
            {fav ? '♥' : '♡'}
          </Animated.Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>{film.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap:{ padding:16 },
  banner:{ width:'100%', height:200, borderRadius:12, backgroundColor:'#e5e7eb' },
  row:{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:12 },
  title:{ fontSize:22, fontWeight:'800', color:'#111827', flex:1, marginRight:12 },
  heartWrap:{ padding:6, backgroundColor:'white', borderRadius:18 },
  heart:{ fontSize:22, color:'#ef4444' },
  desc:{ marginTop:12, color:'#374151', lineHeight:20 },
});
