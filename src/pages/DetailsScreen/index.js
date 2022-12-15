import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import {Container, Title, Genres} from './styles';

import StarsRate from '../../components/StarsRate';

export default function DetailsScreen({ route }) {
  const [data, setData] = useState(route?.params?.params);

  const convertMinutesInHours = (minuts) => {
    const hours = Math.floor(minuts/ 60);          
    const min = minuts % 60;
    const textHours = (`00${hours}`).slice(-2);
    const textMinuts = (`00${min}`).slice(-2);
    
    return `${textHours }:${textMinuts}`;
  };

  
return (
    <Container>
      <View>
        <View>
          <Image/>
        </View>

        <View>
        <Title>{data.title || data.original_title || data.name || data.original_name}</Title>
        <Genres>{data.genre_ids}</Genres>
        <StarsRate rating={data.vote_average}/>
        <Genres>{data.release_date}</Genres>
        <Genres>{convertMinutesInHours(Number(data.runtime))}</Genres>

        </View>
      </View>
        <Text>{data.overview}</Text>
    </Container>
  );
}