import React from 'react';
import {Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Archive from '../pages/Archive';
import Favorites from '../pages/Favorites';

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Archive') {
                        iconName = focused ? 'folder' : 'folder-outline';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#31D618',
                tabBarInactiveTintColor: '#007319',
                tabBarActiveBackgroundColor: 'rgba(16,18,16,0.9)',
                tabBarInactiveBackgroundColor: 'rgba(16,18,16,0.9)',
                tabBarStyle: { borderTopColor: 'rgba(16,18,16,0.9)' },
            })}
            initialRouteName='Home'
        >
            <AppTab.Screen component={Home} name={'Home'} />
            <AppTab.Screen component={Search} name={'Search'} />
            <AppTab.Screen component={Archive} name={'Archive'} />
            <AppTab.Screen component={Favorites} name={'Favorites'} />
        </AppTab.Navigator>
    );
};