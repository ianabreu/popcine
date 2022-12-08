import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  Container,
  Header,
  Logo,
  User,
  Highlight,
  Title,
  StarsArea,
  Star,
  ReleaseDate,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <User />
      </Header>

      <Highlight>
        <Title>Enola Holmes 2</Title>
        <StarsArea>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarsArea>
        <ReleaseDate>04/11/2022</ReleaseDate>
        <Title>Enola Holmes 2</Title>

      </Highlight>

    </Container>
  );
}