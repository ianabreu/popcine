import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import {
    Container,
    Title,
    StarsArea,
    Star,
    ReleaseDate,
    Sinopse,
    SinopseText,
} from './styles';

export default function TrendingMovie({data}) {
    const [stars, setStars ] = useState(['star', 'star', 'star', 'star', 'star'])
    function renderStars() {

        for (let index = 0; index < stars.length; index++) {
            return (
                <StarsArea>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </StarsArea>
            )
        }
        // const vote = data.vote_average;
        // if(vote > 9 && vote <= 10) {

        // }
    
    }
return (
        <Container>
            <ImageBackground
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: -10,
                    top: 0,
                    left: 0,
                    opacity: 0.1
                }}
                source={{ uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.backdrop_path}` }}
            ></ImageBackground>

            <Title>{data.title}</Title>
            {renderStars()}
            <ReleaseDate>{data.release_date}</ReleaseDate>

            <View >

                <Sinopse>Sinopse:</Sinopse>
                <SinopseText>{data.overview}</SinopseText>
            </View>

        </Container>
    );
}