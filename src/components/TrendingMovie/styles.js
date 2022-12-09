import styled from "styled-components/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
align-items: center;
flex: 0.7;
`;
export const Title = styled.Text`
color: #FFF;
font-size: 24px;
font-weight: bold;
`;

export const StarsArea = styled.View`
flex-direction: row;
margin: 10px 0;
`;
export const Star = styled(Ionicons).attrs({
    name: 'star',
    size: 15,
})`
margin-left: 5px;
color: #E0E722;
`
export const ReleaseDate = styled.Text`
color: #FFF;
font-size: 15px;
font-weight: 100;
`;

export const Sinopse = styled.Text`
color: #FFF;
font-size: 18px;
font-weight: bold;
margin: 5px 0;
`;

export const SinopseText = styled.Text`
color: #FFF;
font-size: 16px;
text-align: justify;
line-height: 22px;

`;