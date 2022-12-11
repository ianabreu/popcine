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
    function formatingDate(aaaaMMdd) {
        const arrayDate = aaaaMMdd.split('-');
        const year = arrayDate[0];
        const month = arrayDate[1];
        const day = arrayDate[2];
        return `${day}/${month}/${year}`;
    }

    return (
        <Container>
            <Title>{data.title || data.original_title || 'Sem Título'}</Title>
            <StarsRate rating={data.vote_average} />
            <ReleaseDate>{data.release_date && formatingDate(data.release_date)}</ReleaseDate>
            <View >
                <Sinopse>Sinopse:</Sinopse>
                <SinopseText>{data.overview}</SinopseText>
            </View>
        </Container>
    )
}