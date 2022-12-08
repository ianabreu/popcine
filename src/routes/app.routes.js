import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Archive from '../pages/Archive';
import Favorites from '../pages/Favorites';

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <AppTab.Navigator initialRouteName='Home'>
            <AppTab.Screen component={Home} name={'Home'} />
            <AppTab.Screen component={Search} name={'Search'} />
            <AppTab.Screen component={Archive} name={'Archive'} />
            <AppTab.Screen component={Favorites} name={'Favorites'} />
        </AppTab.Navigator>
    );
};