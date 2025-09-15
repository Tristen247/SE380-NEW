import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerParamList } from './utils/types/drawerParamList';
import Current from './screens/Current';
import ForecastTabs from './screens/ForecastTabs';

const Drawer = createDrawerNavigator<DrawerParamList>();

const WeatherDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="CurrentWeather"
        component={Current}
        options={{ title: 'Current Weather' }}
      />
      <Drawer.Screen
        name="Forecast"
        component={ForecastTabs}
      />
    </Drawer.Navigator>
  );
};

export default WeatherDrawer;
