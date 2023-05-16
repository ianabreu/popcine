import React from 'react';
import { View } from 'react-native';
import {
    Container,
    Title,
    ReleaseDate,
    Sinopse,
    SinopseText,
} from './styles';
import { BtnArea, BtnText } from '../../pages/Login/styles';
import StarsRate from '../StarsRate';

export default function TrendingMovie({ data, seeMore }) {
    function formatingDate(aaaaMMdd) {
        const arrayDate = aaaaMMdd.split('-');
        const year = arrayDate[0];
        const month = arrayDate[1];
        const day = arrayDate[2];
        return `${day}/${month}/${year}`;
    }

    return (
        <Container>
            <Title>{data.title || data.original_title || ''}</Title>
            <StarsRate rating={data.vote_average} />
            <ReleaseDate>{data.release_date && formatingDate(data.release_date)}</ReleaseDate>
            <View >
                <Sinopse>Sinopse:</Sinopse>
                <SinopseText>{data.overview}</SinopseText>
            </View>
            <BtnArea style={{ width: '50%' }} onPress={() => seeMore(data)}>
                <BtnText>Ver mais...</BtnText>
            </BtnArea>
        </Container>
    )
}