import styled from "styled-components/native";
import PopCine from '../../assets/logo.png';
import Feather from 'react-native-vector-icons/Feather';

export const HeaderContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 50px;
margin: 20px 0 10px 0;
`; 

export const Logo = styled.Image.attrs({
    resizeMode: 'contain',
    source: PopCine,
})`
width: 120px;
height: 30px;
`;

export const User = styled(Feather).attrs({
    name: 'user',
    size: 30,
})`
color: #31D618;
`