import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "./utils/drawerParamList";

import BatteryDemo from "./screens/BatteryDemo";


const Drawer = createDrawerNavigator<DrawerParamList>();

const BatteryDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={BatteryDemo}
      />
 
    </Drawer.Navigator>
  );
};

export default BatteryDrawer;