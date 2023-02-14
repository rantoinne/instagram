import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  Feeds,
  UserProfile,
} from '@screens';
import { COLOR_CODES } from '@utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommonStack from './commonStack';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const preventTabPress = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  }
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarColor: COLOR_CODES.WHITE,
        tabBarLabel: null,
      }}
    >
      <Tab.Screen
        name="Feeds"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Foundation name="home" size={24} color={COLOR_CODES.BLACK} />;
            }
            return <Foundation name="home" size={24} color={COLOR_CODES.BLACK_BLUR} />;
          }
        }}
        component={CommonStack}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Fontisto name="search" size={24} color={COLOR_CODES.BLACK} />;
            }
            return <Fontisto name="search" size={24} color={COLOR_CODES.BLACK_BLUR} />;
          },
        }}
        listeners={{
          tabPress: preventTabPress
        }}
        component={Feeds}
      />
      <Tab.Screen
        name="Reel"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons name="movie" size={24} color={COLOR_CODES.BLACK} />;
            }
            return <MaterialCommunityIcons name="movie" size={24} color={COLOR_CODES.BLACK_BLUR} />;
          }
        }}
        component={Feeds}
        listeners={{
          tabPress: preventTabPress
        }}
      />
      <Tab.Screen
        name="Likes"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Foundation name="heart" size={24} color={COLOR_CODES.BLACK} />;
            }
            return <Foundation name="heart" size={24} color={COLOR_CODES.BLACK_BLUR} />;
          }
        }}
        component={Feeds}
        listeners={{
          tabPress: preventTabPress
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <FontAwesome name="user-circle-o" size={24} color={COLOR_CODES.BLACK} />;
            }
            return <FontAwesome name="user-circle-o" size={24} color={COLOR_CODES.BLACK_BLUR} />;
          }
        }}
        component={UserProfile}
      />
    </Tab.Navigator>
  );
}
