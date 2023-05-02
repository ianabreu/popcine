import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { Background, Container, AreaForm, Logo, BtnArea, BtnText, BtnArea2, BtnText2 } from './styles';
import FormInput from '../../components/FormInput';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { loading, signIn, } = useContext(AuthContext);

  async function handleSignIn(email, password) {
    if (email === '') return alert('email');
    if (password === '') return alert('senha');

    await signIn(email, password);

    setEmail('');
    setPassword('');
    Keyboard.dismiss();
    navigation.navigate('Favorites');
  }

  function alert(typeMessage) {
    Alert.alert(
      'Campo Inválido',
      `Nescessário preencher o campo ${typeMessage}.`,
      [
        { text: 'OK', onPress: () => { } },
      ])
  }

  return (
    <Background>
      <Container>
          <Logo source={require('../../assets/logo-login.png')}/>
        <AreaForm>

          <FormInput
            label='E-mail'
            placeholder='Digite seu e-mail'
            type='email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <FormInput
            label='Senha'
            placeholder='Digite sua senha'
            type='password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <BtnArea onPress={() => handleSignIn(email, password)}>
            {loading ?
              <ActivityIndicator color={'#FFF'} size={30} /> :
              <BtnText>Entrar</BtnText>
              }
          </BtnArea>

          <BtnArea2 onPress={() => navigation.navigate('SignUp')}>
            <BtnText2>Não tem uma conta? Cadastre-se</BtnText2>
          </BtnArea2>
        </AreaForm>
      </Container>
    </Background>
  );
};