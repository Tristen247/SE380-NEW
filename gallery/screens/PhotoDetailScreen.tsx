import { useLayoutEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { GalleryStackParamList } from '../utils/stackParamList';

type Props = NativeStackScreenProps<GalleryStackParamList, 'PhotoDetail'>;

export default function PhotoDetailScreen({ route, navigation }: Props) {
  const { url } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: url });
  }, [navigation, url]);

  const openModal = () => navigation.navigate('FullScreenModal', { url });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} activeOpacity={0.9} onPress={openModal}>
        <Image source={{ uri: url }} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  touchable: { flex: 1, alignSelf: 'stretch' },
  image: { width: '100%', height: '100%' },
});
