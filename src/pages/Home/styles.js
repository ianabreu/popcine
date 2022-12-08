import styled from "styled-components/native";
import PopCine from '../../assets/logo.png';
import Feather from 'react-native-vector-icons/Feather';


export const Container = styled.View`
background-color: #101210;
flex: 1;
padding-left: 10px;
padding-right: 10px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 50px;
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
    size: 25,
})`
color: #31D618;
`
