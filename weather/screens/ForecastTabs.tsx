import { Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Forecast from './Forecast';
import { ForecastTabParams } from '../utils/types/forecastTabParams';

const Tab = createBottomTabNavigator<ForecastTabParams>();

const ForecastTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let icon: string = '';
					if (route.name === "5 Day") {
						icon = "5"
					} else if (route.name === "7 Day") {
						icon = "7"
					}

					return <Text style={{color: `${color}`, fontSize: size}}>{icon}</Text>
				},
				tabBarActiveTintColor: "#4e1780",
				tabBarInactiveTintColor: "gray",
				headerShown: false
			})}
    >
      <Tab.Screen name="5 Day" component={Forecast} initialParams={{ days: 5 }} />
      <Tab.Screen name="7 Day" component={Forecast} initialParams={{ days: 7 }} />
    </Tab.Navigator>
  );
};

export default ForecastTabs;
