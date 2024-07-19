import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//images
import {
  HomeTabIconActive,
  HomeTabIconInActive,
  SurfingTabIconActive,
  SurfingTabIconInActive,
  HulaTabIconInActive,
  VulcanoTabIconInActive,
} from '../assets';
import COLORS from '../theme/colors';

const getIcon = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case 'Home':
      return isFocused ? HomeTabIconActive : HomeTabIconInActive;
    case 'Surfing':
      return isFocused ? SurfingTabIconActive : SurfingTabIconInActive;
    case 'Hula':
      return HulaTabIconInActive;
    case 'Vulcano':
      return VulcanoTabIconInActive;
    default:
      return HomeTabIconActive;
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
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              padding: 8,
              borderBottomWidth: isFocused ? 2 : 0,
              borderBottomColor: isFocused ? COLORS.primary : 'transparent',
            }}>
            <Image
              style={{width: 24, height: 24, resizeMode: 'contain'}}
              source={getIcon(route.name, isFocused)}
            />
            <Text
              style={{
                color: isFocused ? COLORS.primary : 'black',
                fontWeight: '600',
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

export default BottomTabBarItem;
