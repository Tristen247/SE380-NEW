import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ImageData } from '../utils/imageData';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 4;

interface Props {
  images: ImageData[];
  onImagePress: (img: ImageData) => void;
}

const ImageGrid = ({ images, onImagePress }: Props) => {
  const renderItem = ({ item }: { item: ImageData }) => (
    <TouchableOpacity onPress={() => onImagePress(item)}>
      <Animated.Image source={{ uri: item.url }} style={[styles.image, animatedStyle]} />
    </TouchableOpacity>
  );

  const marginVertical = useSharedValue(2);
  const rotation = useSharedValue(0);
  
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      // set our updated margin by adding our base margin of 2 to the scroll offset divided by 30
      // 30 is an arbitrary number that I chose to make the animation feel right
      const newMargin = 2 + event.contentOffset.y / 30;

      // We don't want the margin to ever be less than what we set in our style sheet so don't allow it go below 2
      if (newMargin < 2) {
        marginVertical.value = 2;
        // This is our max margin. We don't want it to go above 20. Set it to whatever you'd like.
      } else if (newMargin > 20) {
        marginVertical.value = 20;
      } else {
        // If the new margin is between 2 and 20, set the shared value to the new margin
        marginVertical.value = newMargin;
      }

      rotation.value = (event.contentOffset.y / 200) * Math.PI / 4;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginVertical: marginVertical.value,
      transform: [
        { rotate: `${rotation.value}rad` },
      ],
    };
  });

  return (
    <Animated.FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={3}
      contentContainerStyle={styles.grid}
      onScroll={scrollHandler}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 2,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 2,
    borderRadius: 4,
  },
});

export default ImageGrid;
