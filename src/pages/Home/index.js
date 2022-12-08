import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  Container,
  Header,
  Logo,
  User,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <User />
      </Header>

    </Container>
  );
}