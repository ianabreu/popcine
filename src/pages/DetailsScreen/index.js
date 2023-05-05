import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, View } from 'react-native';
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
  Heart
} from './styles';

import StarsRate from '../../components/StarsRate';

export default function DetailsScreen({ route }) {
  const [data, setData] = useState(route?.params?.params);
  const { width, height } = Dimensions.get('screen')

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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View style={{ flex: 0.8 }}>
            <Capa source={data.poster_path != null ? { uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }
              :
              require('../../assets/poster_default.jpg')
            }
            />
          </View>

          <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
            <Title>{data.title || data.original_title || data.name || data.original_name || 'Sem Título'}</Title>
            {data.genres && data.genres.map((item) => (
              <Genres key={item.id}>{item.name}</Genres>
            ))}
            <StarsRate rating={data.vote_average} />
            <DetailTwin>{data.first_air_date ? formatingDate(data.first_air_date) : data.release_date ? formatingDate(data.release_date) : ''}</DetailTwin>
            {data.runtime != 0 && (<DetailTwin>{convertMinutesInHours(Number(data.runtime))}</DetailTwin>)}

          </View>
        </View>

        <TitleOverview>Sinopse:</TitleOverview>
        <Overview>
          {data.overview === '' ? 'Não temos uma sinopse em Português do Brasil.'
            :
            data.overview}
        </Overview>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 60 }}>
          <WatchButton>
            <Play />
            <WatchText>Trailer</WatchText>
          </WatchButton>
          <Heart />
        </View>
      </ScrollView>
    </Container>
  );
}