import React from 'react';
import { Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageData } from '../utils/imageData';

interface Props {
  image: ImageData | null;
  onClose: () => void;
}

const FullScreenImage = ({ image, onClose }: Props) => {
  if (!image) return null;

  return (
    <Modal visible={!!image} transparent>
      <TouchableOpacity style={styles.container} onPress={onClose}>
        <Image
          source={{ uri: `https://picsum.photos/id/${image.id}/600` }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default FullScreenImage;
