import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Button, Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Title,
  Genres,
  Capa,
  Overview,
  DetailTwin,
  TitleOverview,
  WatchButton,
  WatchText,
  Play,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarsRate from '../../components/StarsRate';
import VideoList from '../../components/VideoList';

import { useIsFocused } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import { MovieContext } from '../../contexts/movie';

export default function DetailsScreen({ route }) {
  const { addToFavorites, userFavorites } = useContext(AuthContext);
  const { getMovieVideo } = useContext(MovieContext);
  const isFocused = useIsFocused();

  const [data, setData] = useState(route?.params?.params);
  const [video, setVideo] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { width, height } = Dimensions.get('screen');

  useEffect(() => {
    function isAlreadyFavorite(id) {
      let isInclude = userFavorites.some(item => String(item.id) === String(id))
      setIsFavorite(isInclude);
    }
    isAlreadyFavorite(data.id)
  }, [isFocused])

  useEffect(() => {
    handleGetMovieVideo(data.id)
  }, [])
  const convertMinutesInHours = (minuts) => {
    const hours = Math.floor(minuts / 60);
    const min = minuts % 60;
    const textHours = (`${hours}`).slice(-2);
    const textMinuts = (`00${min}`).slice(-2);

    return `${textHours}h ${textMinuts}m`;
  };
  function formatingDate(aaaaMMdd) {
    const arrayDate = aaaaMMdd.split('-');
    const year = arrayDate[0];
    const month = arrayDate[1];
    const day = arrayDate[2];
    return `${day}/${month}/${year}`;
  }
  function Favorites() {
    addToFavorites(data);
    setIsFavorite(!isFavorite);
  }
  async function handleGetMovieVideo(id) {
    const videoData = await getMovieVideo(id);
    videoData.results.length > 0 && setVideo(videoData.results);
  }

  return (
    <Container>
      {data.backdrop_path &&
        <Image resizeMode='cover' source={{ uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}` }}
          style={{
            width: width,
            height: height,
            position: 'absolute',
            zIndex: -10,
            top: 0,
            left: 0,
            opacity: 0.2
          }}
        />
      }
      <ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >

          <View style={{ flex: 0.8 }}>
            <Capa
              source={data.poster_path != null ? { uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }
                :
                require('../../assets/poster_default.jpg')
              }
            />
          </View>

          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center', flex: 1
            }}
          >

            <Title>{data.title || data.original_title || data.name || data.original_name || ''}</Title>
            {data.genres && data.genres.map((item) => (
              <Genres key={item.id}>{item.name}</Genres>
            ))}
            <StarsRate rating={data.vote_average} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View>
                <DetailTwin>{data.first_air_date ? formatingDate(data.first_air_date) : data.release_date ? formatingDate(data.release_date) : ''}</DetailTwin>
                {data.runtime != 0 && (<DetailTwin>{convertMinutesInHours(Number(data.runtime))}</DetailTwin>)}
              </View>
              <Pressable style={{ marginLeft: 20 }} onPress={Favorites}>
                <Icon
                  name={isFavorite ? 'favorite' : 'favorite-outline'}
                  size={50}
                  color='#D22730'
                />
              </Pressable>
            </View>
          </View>
        </View>

        <TitleOverview>Sinopse:</TitleOverview>
        <Overview style={!video && { marginBottom: 60 }}>
          {data.overview === '' ? 'Não temos uma sinopse em Português do Brasil.'
            :
            data.overview}
        </Overview>

        {video &&
          <>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}
            >

              <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'flex-start', flex: 1 }}>
                <Play />
                <Title>Trailer</Title>
              </View>

            </View>

            <View style={{ flex: 1, width: width, }}>

              <FlatList
                data={video}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<VideoList screen={{ width: width, height: height }} video={item} />)}
              />
            </View>
          </>
        }


      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  videoList: {
    marginBottom: 60
  }
})