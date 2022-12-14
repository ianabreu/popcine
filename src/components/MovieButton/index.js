import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function MovieButton({ movie }) {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() =>{}}>
            <Capa
                source={{ uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}` }}
            />
        </TouchableOpacity>
    );
}


export const Capa = styled.Image`
width: 150px;
height: 225px;
border-radius: 7px;
margin: 5px;
`;