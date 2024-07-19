import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBarItem from './BottomTabBarItem';

//tabs
import HomeScreen from '../screens/home';
import SurfingScreen from '../screens/surfing';

const Tab = createBottomTabNavigator();

const HulaScreen = () => {
  return <View />;
};

const VulcanoScreen = () => {
  return <View />;
};

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={BottomTabBarItem}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Surfing" component={SurfingScreen} />
      <Tab.Screen name="Hula" component={HulaScreen} />
      <Tab.Screen name="Vulcano" component={VulcanoScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
