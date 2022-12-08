import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import {
  Container,
  } from './styles';

import Highlight from '../../components/Highlight';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header/>
      <Highlight />
      
    </Container>
  );
}