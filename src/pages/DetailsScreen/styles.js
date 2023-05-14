import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/MaterialIcons';


export const Container = styled.SafeAreaView`
flex: 1;
background-color: #101210;
padding: 0 10px;
`;
export const Capa = styled.Image`
width: 165px;
height: 247.5px;
border-radius: 7px;
margin: 5px;
`;
export const Title = styled.Text`
text-align: center;
font-size: 24px;
color: #FFF;
`;
export const Genres = styled.Text`
text-align: center;
color: #FFF;
font-size: 14px;
font-weight: 300;
`;
export const DetailTwin = styled.Text`
text-align: center;
font-size: 18px;
color: #FFF;
`;
export const TitleOverview = styled.Text`
text-align: center;
padding-top: 10px;
font-size: 20px;
font-weight: bold;
color: #FFF;

`;
export const Overview = styled.Text`
font-size: 18px;
line-height: 24px;
color: #FFF;
padding-bottom: 20px;
`;
export const WatchButton = styled.TouchableOpacity`
flex-direction: row;
background-color: #D22730;
align-items: center;
border-radius: 10px;
padding: 10px 20px;
`; 
export const WatchText = styled.Text`
font-size: 24px;
font-weight: bold;
color: #FFF;
`; 
export const Play = styled(Icon).attrs({
    name: 'play-circle-outline',
    size: 30,
})`
padding-right: 5px;
color: #FFF;
`;