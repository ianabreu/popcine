import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Details from '../pages/DetailsScreen';
import CustomBackHeader from '../components/Header/CustomBackHeader';

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
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

    </Stack.Navigator>
  );
}