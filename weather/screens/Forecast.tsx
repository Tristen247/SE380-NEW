import { SafeAreaView, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useFetch } from '../hooks/useFetch';
import { RouteParams } from '../utils/types/routeParams';
import { mapForecastData } from '../utils/mapForecastData';

const Forecast = () => {
	const { params } = useRoute();
	const typedParams = params as RouteParams;

  const { data, loading, error } = useFetch(`${typedParams.days}`);

	if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!data || error) {
    return <Text>Error fetching data</Text>;
  }

  const forecastData = mapForecastData({ data });

  const forecastList = Array.isArray(forecastData.forecast.forecastDay)
	? forecastData.forecast.forecastDay
	: [forecastData.forecast.forecastDay];

	return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.cityState}>
        Forecast for {forecastData.location.name}, {forecastData.location.region}
      </Text>

      <FlatList
  			data={forecastList}
  			keyExtractor={(item) => item.date}
  			renderItem={({ item }) => (
				<View style={styles.container}>
					<Text>{item.date}</Text>
					<Text>{item.day.maxTempF}° | {item.day.minTempF}°</Text>
					<Text>{item.day.condition.text}</Text>
					<Image
						source={{ uri: `https:${item.day.condition.icon}` }}
						accessibilityLabel={`weather icon: ${item.day.condition.text}`}
						style={{ height: 50, width: 50 }}
					/>
				</View>
  		)}
		/>
    </SafeAreaView>
  );
};

export default Forecast;

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
	},
	container: {
		marginHorizontal: 20,
		paddingHorizontal: 10,
		flex: 1,
		flexDirection: "row",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-between",
	},
	mainContainer: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	cityState: {
		fontSize: 24,
		width: "100%",
		textAlign: "center",
	},
});
