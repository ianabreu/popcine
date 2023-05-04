import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons"

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #101210;
`;
export const InputArea = styled.View`
flex-direction: row;
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const Input = styled.TextInput.attrs({
    placeholder: `Procurar...`,
    placeholderTextColor: '#ABABAB',
    returnKeyType: 'search',
    autoCorrect: false,
    autoCapitalize: 'none',
})`
width: 82%;
height: 50px;
background-color: #282D28;
color: #FFF;
padding: 10px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
`;
export const SearchButton = styled.TouchableOpacity`
margin-left: -1px;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
background-color: #282D28;
justify-content: center;
align-items: center;
height: 50px;
width: 13%;
`;

export const Icon = styled(Ionicons).attrs({
    name: 'search',
    size: 30,
})`
color: #31D618;
`;



export const ResultArea = styled.View`
flex: 1;
padding-top: 10px;
padding-bottom: 50px;
align-items: center;
`;
