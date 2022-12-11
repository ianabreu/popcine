import React, { useEffect, useState } from 'react';
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
import StarsRate from '../StarsRate';

export default function TrendingMovie({ data }) {
    
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

            <Title>{data.title || data.original_title || 'Sem Título'}</Title>

                <StarsRate rating={data.vote_average} />


            <ReleaseDate>{data.release_date}</ReleaseDate>

            <View >

                <Sinopse>Sinopse:</Sinopse>
                <SinopseText>{data.overview}</SinopseText>
            </View>

        </Container>
    )
}