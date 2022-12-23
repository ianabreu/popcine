import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeRoutes, SearchRoutes} from './stack.routes';
import Favorites from '../pages/Favorites';

const AppTab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "HomeStack") {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'SearchStack') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#31D618',
                tabBarInactiveTintColor: '#007319',
                tabBarActiveBackgroundColor: 'rgba(16,18,16,0.9)',
                tabBarInactiveBackgroundColor: 'rgba(16,18,16,0.9)',
                tabBarStyle: {
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'transparent'
                }
            
            })}
            initialRouteName='Home'
        >
            <AppTab.Screen component={HomeRoutes} name={'HomeStack'} />
            <AppTab.Screen component={SearchRoutes} name={'SearchStack'} />
            <AppTab.Screen component={Favorites} name={'Favorites'} />
        </AppTab.Navigator>
    );
};