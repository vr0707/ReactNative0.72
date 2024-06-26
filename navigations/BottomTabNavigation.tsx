import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import { Home,Search,Cart,User } from './StackNavigations';

const BottomTab = createBottomTabNavigator();

const config = {headerShown: false};

export default function BottomTabNavigation(props:any) {
  return (
    <BottomTab.Navigator
      screenOptions={config}
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Cart" component={Cart} />
      <BottomTab.Screen name="User" component={User} />
    </BottomTab.Navigator>
  );
}
