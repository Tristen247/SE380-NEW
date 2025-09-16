import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./utils/drawerParamList";

import BatteryDemo from "./screens/BatteryDemo";
import ShakeToCharge from "./screens/ShakeToCharge";

const Drawer = createDrawerNavigator<DrawerParamList>();

const BatteryDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={BatteryDemo}
      />
      <Drawer.Screen
        name="ShakeToCharge"
        component={ShakeToCharge}
        options={{ title: "Shake to Charge" }}
      />
 
    </Drawer.Navigator>
  );
};

export default BatteryDrawer;