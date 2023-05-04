import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
flex: 1;
background-color: #101210;
padding: 0 10px;
`;
export const Title = styled.Text`
font-size: 18px;
color: #FFF;
`;
export const InputArea = styled.View`
flex-direction: row;
margin-top: 10px;
align-items: center;
justify-content: center;
`;
export const Input = styled.TextInput.attrs({
})`
width: 100%;
height: 50px;
background-color: #282D28;
color: #FFF;
font-size: 18px;
padding: 10px;
border-radius: 10px;
margin: 10px 0px;
text-align:center;
`;

export const Button = styled.TouchableOpacity`
flex-direction: row;
background-color: #D22730;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 5px;
margin: 30px 0px;
`; 
export const ButtonText = styled.Text`
font-size: 18px;
font-weight: bold;
color: #FFF;
`;