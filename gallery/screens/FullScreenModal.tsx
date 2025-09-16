import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '../utils/stackParamList';

type Props = StackScreenProps<StackParamList, 'FullScreenModal'>;

const FullScreenModal = ({ route, navigation }: Props) => {
  const { url } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: 'white', fontSize: 24 }}>x</Text>
        </Pressable>
      </View>
      <Image
        source={{ uri: url }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
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
  button: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
  }
});

export default FullScreenModal;
