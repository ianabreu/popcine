import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Details from '../pages/DetailsScreen';
import SignIn from '../pages/Login/SignIn';
import Profile from '../pages/Profile';
import CustomBackHeader from '../components/Header/CustomBackHeader';
import Favorites from '../pages/Favorites';

const Stack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerTitle: 'Detalhes',
          headerStyle: { backgroundColor: '#101210' },
          headerTintColor: '#FFF',
          headerTitleAlign: 'left',
          headerRight: (props) => <CustomBackHeader {...props} />,
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          headerTitle: 'Login',
          headerStyle: {
            backgroundColor: '#101210',
          },
          headerTintColor: '#FFF',
          animation: 'slide_from_right',

        }}
      />

      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{

          headerTitle: 'Perfil',
          headerStyle: {
            backgroundColor: '#101210',
          },
          headerTintColor: '#FFF',
          animation: 'slide_from_right',
        }}
      />


    </Stack.Navigator>
  );
}
export function SearchRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerTitle: 'Detalhes',
          headerStyle: { backgroundColor: '#101210' },
          headerTintColor: '#FFF',
          headerTitleAlign: 'left',
          headerRight: (props) => <CustomBackHeader {...props} />,
          animation: 'slide_from_right',
        }}
      />

    </Stack.Navigator>
  );
}
export function FavoriteRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Details'
        component={Details}
        options={{
          headerTitle: 'Detalhes',
          headerStyle: { backgroundColor: '#101210' },
          headerTintColor: '#FFF',
          headerTitleAlign: 'left',
          headerRight: (props) => <CustomBackHeader {...props} />,
          animation: 'slide_from_right',
        }}
      />

    </Stack.Navigator>
  );
}