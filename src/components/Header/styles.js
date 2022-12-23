import styled from "styled-components/native";
import PopCine from '../../assets/logo.png';

export const HeaderContainer = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 50px;
margin: 20px 0 10px 0;
padding-left: 10px;
padding-right: 10px;
`; 

export const Logo = styled.Image.attrs({
    resizeMode: 'contain',
    source: PopCine,
})`
width: 120px;
height: 30px;
`;