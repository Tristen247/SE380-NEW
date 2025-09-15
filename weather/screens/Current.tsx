import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import { CurrentData, CurrentResponse } from '../utils/types/weatherTypes';

import { useFetch } from '../hooks/useFetch';

const Current = () => {
  const { data, loading, error } = useFetch("current");

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!data || error) {
    return <Text>Error fetching data</Text>;
  }

  const typedData = data as CurrentResponse;

  const output: CurrentData = {
		city: typedData["location"]["name"],
		state: typedData["location"]["region"],
		temp: typedData["current"]["temp_f"],
		feelslike: typedData["current"]["feelslike_f"],
		icon: typedData["current"]["condition"]["icon"],
		condition: typedData["current"]["condition"]["text"],
	};

  return (
    <SafeAreaView style={styles.container}>
			<Text style={styles.citystate}>{output.city}, {output.state}</Text>
      <Image
				source={{ uri: "https:" + output.icon }}
				alt={output.condition}
				style={styles.image}
			/>
      <Text style={styles.condition}>{output.condition}</Text>
      <Text style={styles.temp}>{output.temp}°</Text>
      <Text style={styles.feelslike}>Feels like {output.feelslike}°</Text>
		</SafeAreaView>
  );
};

export default Current;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  citystate: {
    fontSize: 24,
  },
  image: {
    width: 250,
    height: 250,
  },
  condition: {
    fontSize: 28,
  },
  temp: {
    fontSize: 48,
    marginVertical: 8,
  },
  feelslike: {
    fontSize: 18,
    color: "dimgrey"
  },
});
