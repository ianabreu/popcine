import React, { useState, useContext } from 'react';
import { Button, Image, ImageBackground, Text, View } from 'react-native';
import {
  Container, HomeList
} from './styles';

import { MovieContext } from '../../contexts/movie';

import TrendingMovie from '../../components/TrendingMovie';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';

export default function Home() {
  const { trendingMovie } = useContext(MovieContext);


  return (
    <Container>
      <Header />
      <TrendingMovie data={trendingMovie}/>
      <Text></Text>
      {/* <HomeList>
        {movies.map((item, key) => (
          <MovieList key={key} data={item} />
        ))}
      </HomeList> */}
    </Container>
  );
}