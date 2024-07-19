import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import COLORS from '../theme/colors';
import HomeTabActive from '../assets/svgs/HomeTabActive';
import HomeTabInActive from '../assets/svgs/HomeTabInActive';
import SurfingTabActive from '../assets/svgs/SurfingTabActive';
import SurfingTabInActive from '../assets/svgs/SurfingTabInActive';
import HulaTabActive from '../assets/svgs/HulaTabActive';
import HulaTabInActive from '../assets/svgs/HulaTabInActive';
import VulcanoTabActive from '../assets/svgs/VulcanoesTabActive';
import VulcanoesTabInActive from '../assets/svgs/VulcanoesTabInActive';

const getIcon = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case 'Home':
      return isFocused ? <HomeTabActive /> : <HomeTabInActive />;
    case 'Surfing':
      return isFocused ? <SurfingTabActive /> : <SurfingTabInActive />;
    case 'Hula':
      return isFocused ? <HulaTabActive /> : <HulaTabInActive />;
    case 'Vulcano':
      return isFocused ? <VulcanoTabActive /> : <VulcanoesTabInActive />;
    default:
      return isFocused ? <SurfingTabActive /> : <SurfingTabInActive />;
  }
};

const BottomTabBarItem = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabBarItem,
              {
                borderBottomWidth: isFocused ? 4 : 0,
                borderBottomColor: isFocused ? COLORS.primary : 'transparent',
              },
            ]}>
            {getIcon(route.name, isFocused)}
            <Text
              style={{
                color: isFocused ? COLORS.primary : 'black',

                fontFamily: isFocused
                  ? 'IBMPlexMono-Bold'
                  : 'IBMPlexMono-Medium',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabBarItem;
