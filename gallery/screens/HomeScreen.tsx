import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { generateImageData, ImageData } from '../utils/imageData';
import { StackParamList } from '../utils/stackParamList';

import Search from '../components/Search';
import ImageGrid from '../components/ImageGrid';

type Props = StackScreenProps<StackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  const allImages = generateImageData();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredImages = allImages.filter((img) =>
    img.id.toString().includes(searchTerm)
  );

  const handleImagePress = (img: ImageData) => {
    const largeUrl = `https://picsum.photos/id/${img.id}/600`;
    navigation.navigate('PhotoDetail', { url: largeUrl });
  };
    
  return (
    <SafeAreaView style={styles.container}>
      <Search value={searchTerm} onChange={setSearchTerm} />
      <ImageGrid images={filteredImages} onImagePress={handleImagePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
