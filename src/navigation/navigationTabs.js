import React from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing screens from correct paths
import HomeScreen from '../screens/Home';

// Importing screens constants
import screens from '../constants/screens';

// Importing images from correct paths
import images from '../constants/images';

// Importing colors from correct paths
import colors from '../constants/colors';

// Importing styles from correct paths
import AppStyles from '../constants/AppStyles';

// Importing constants from correct paths

// Importing dimensions from correct paths
import { lessIndent } from '../constants/dimensions';
import FavoriteScreen from '../screens/Favourite';
import SearchScreen from '../screens/Search/insex';
import RequestsScreen from '../screens/Request';
import MoreScreen from '../screens/More';
import { IS_IPHONE_X, STATUS_BAR_HEIGHT } from '../constants/constant';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <>
      <View style={AppStyles.root}>
        <Tab.Navigator
          initialRouteName={screens.SearchRoot}
          shifting={false}
          keyboardHidesNavigationBar={Platform.OS !== 'ios'}
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: colors.primary,
            tabBarActiveBackgroundColor: colors.primary,
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === screens.HomeRoot) {
                iconName = images.homeIcon;
              } else if (route.name === screens.RequestsRoot) {
                iconName = images.requestsIcon;
              } else if (route.name === screens.SearchRoot) {
                iconName = images.searchIcon;
              } else if (route.name === screens.FavoriteRoot) {
                iconName = images.favoriteIcon;
              } else if (route.name === screens.MoreRoot) {
                iconName = images.moreIcon;
              }
              return (
                <Image
                  source={iconName}
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: focused ? colors.accent : colors.iconColor,
                  }}
                />
              );
            },
          })}
          tabBar={(props) => (
            <FabTabBar
              isRtl={false}
              bottomBarContainerStyle={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}
              {...props}
            />
          )}>
          <Tab.Screen
            name={screens.HomeRoot}
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarLabelStyle: {
                fontSize: 13,
              },
            }}
          />

          <Tab.Screen
            name={screens.FavoriteRoot}
            component={FavoriteScreen}
            options={{
              tabBarLabel: 'Favorite',
              tabBarLabelStyle: {
                fontSize: 13,
              },
            }}
          />
          <Tab.Screen name={screens.SearchRoot} component={SearchScreen} />
          <Tab.Screen
            name={screens.RequestsRoot}
            component={RequestsScreen}
            options={{
              tabBarLabel: 'Requests',
              tabBarLabelStyle: {
                fontSize: 13,
              },
            }}
          />
          <Tab.Screen
            name={screens.MoreRoot}
            component={MoreScreen}
            options={{
              tabBarLabel: 'More',
              tabBarLabelStyle: {
                fontSize: 13,
              },
            }}
          />
        </Tab.Navigator>
      </View>
      <View style={s.customizeSafeAreaView} />
    </>
  );
}

const s = StyleSheet.create({
  customizeSafeAreaView: {
    flex: 0,
    backgroundColor: colors.primary,
    paddingBottom: IS_IPHONE_X ? STATUS_BAR_HEIGHT - lessIndent : 0,
  },
});
