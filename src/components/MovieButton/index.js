import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function MovieButton({ movie, goToDetails }) {

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() =>{ goToDetails(movie) }}>
            <Capa
                source={movie.poster_path ? {uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }
                :
                require('../../assets/poster_default.jpg')}
            />
        </TouchableOpacity>
    );
}


export const Capa = styled.Image`
width: 114px;
height: 170px;
border-radius: 7px;
margin: 5px;
`;