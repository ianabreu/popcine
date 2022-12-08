import styled from "styled-components/native";
import PopCine from '../../assets/logo.png';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const Container = styled.SafeAreaView.attrs({
    backgroundColor: '#101210'
})`
/* background-color: #101210; */
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

export const Highlight = styled.View`
align-items: center;
`;
export const Title = styled.Text`
color: #FFF;
font-size: 24px;
font-weight: bold;
`;

export const StarsArea = styled.View`
flex-direction: row;
`;
export const Star = styled(Ionicons).attrs({
    name: 'star',
    size: 25,
})`
margin-left: 5px;
color: #E0E722;
`
export const ReleaseDate = styled.Text`
color: #FFF;

`;