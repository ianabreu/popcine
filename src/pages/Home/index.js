import React, { useContext } from 'react';
import { Image, Dimensions } from 'react-native';
import {
  Container, HomeList
} from './styles';

import { MovieContext } from '../../contexts/movie';

import TrendingMovie from '../../components/TrendingMovie';
import Header from '../../components/Header';
import MovieList from '../../components/MovieList';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { trendingMovie, movies, getTvData, getMovieData } = useContext(MovieContext);
  const { width, height } = Dimensions.get('screen')
  const navigation = useNavigation();
 
 
  async function openDetails(data) {
    let response;
    if (data.media_type === 'tv') {
      response = await getTvData(data.id);
    } else {
      response = await getMovieData(data.id);
    }
    navigation.navigate('Details', {
      params: response
    })
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header isHome={true} />
      <Image resizeMode="cover"
        source={{ uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${trendingMovie.poster_path}` }}
        style={{
          width: width,
          height: height * 0.7,
          position: 'absolute',
          zIndex: -10,
          top: 0,
          left: 0,
          opacity: 0.2
        }}
      />
      <TrendingMovie data={trendingMovie} seeMore={openDetails} />
      {<HomeList>
        {movies.map((item, key) => (
          <MovieList key={key} data={item} handleGoToDetails={openDetails} />
        ))}
      </HomeList>}

    </Container>
  );
}