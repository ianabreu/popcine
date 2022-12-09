import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MovieProvider from './contexts/movie';

import Routes from './routes';

export default function App() {
 return (
   <NavigationContainer>
    <MovieProvider>
      <StatusBar backgroundColor='#101210' barStyle='light-content' showHideTransition='slide'/>
      <Routes/>
    </MovieProvider>
   </NavigationContainer>
  );
}