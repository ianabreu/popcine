import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
    HighlightContainer,
    Title,
    StarsArea,
    Star,
    ReleaseDate,
    Sinopse,
    SinopseText,
} from './styles';

export default function Highlight() {
    return (
        <HighlightContainer>
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
                source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gFzATstoGE0DnYDbmwsayWpW46f.jpg' }}
            ></ImageBackground>

            <Title>Enola Holmes 2</Title>
            <StarsArea>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </StarsArea>
            <ReleaseDate>04/11/2022</ReleaseDate>

            <View >

                <Sinopse>Sinopse:</Sinopse>
                <SinopseText>Depois dos eventos de Enola Holmes, o segundo filme acompanha Enola (Millie Bobby Brown)
                    em um caso "de verdade!". Agora uma detetive de aluguel igual ao seu irmão, Sherlock (Henry Cavill),
                    a detetive assume seu primeiro caso oficial. Enola é requisitada para achar uma garota desaparecida,
                    mas à medida que sua investigação continua, ela descobre que há muito mais em jogo do que apenas um
                    desaparecimento. As faíscas de uma perigosa conspiração acendem um mistério que requer a ajuda de amigos
                    – incluindo a dos seus irmãos – para desvendar.
                </SinopseText>
            </View>

        </HighlightContainer>
    );
}