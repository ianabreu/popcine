import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, Platform } from 'react-native';
import { Background, Container, AreaForm, Logo, BtnArea, BtnText, BtnArea2, BtnText2 } from './styles';
import FormInput from '../../components/FormInput';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {

  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { loading, signUp, signIn, } = useContext(AuthContext);

  async function handleSignIn(email, password) {
    if (email === '') return alert('email');
    if (password === '') return alert('senha');

    await signIn(email, password);

    setEmail('');
    setPassword('');
    Keyboard.dismiss();
    navigation.goBack();
  }

  async function handleSignUp(name, email, password) {
    if (name === '') return alert('nome');
    if (email === '') return alert('email');
    if (password === '') return alert('senha');

    await signUp(name, email, password);

    setName('');
    setEmail('');
    setPassword('');
    Keyboard.dismiss();
    navigation.goBack();

  }

  function alert(typeMessage) {
    Alert.alert(
      'Campo Inválido',
      `Nescessário preencher o campo ${typeMessage}.`,
      [
        { text: 'OK', onPress: () => { } },
      ])
  }

  if (login) {

    return (
      <Background>
        <Container
          behavior={'padding'}
          enabled
        >
          <Logo source={require('../../assets/logo-login.png')} />
          <AreaForm>

            <FormInput
              label='E-mail'
              placeholder='Digite seu e-mail'
              type='email'
              value={email}
              onChangeText={(text) => setEmail(text)}
              returnKeyType={'go'}
            />

            <FormInput
              label='Senha'
              placeholder='Digite sua senha'
              type='password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType={'go'}
            />

            <BtnArea onPress={() => handleSignIn(email, password)}>
              {loading ?
                <ActivityIndicator color={'#FFF'} size={30} /> :
                <BtnText>Entrar</BtnText>
              }
            </BtnArea>

            <BtnArea2 onPress={() => {
              setEmail('');
              setName('');
              setPassword('');
              setLogin(false)
              }}
              >
              <BtnText2>Não tem uma conta? Cadastre-se</BtnText2>
            </BtnArea2>
          </AreaForm>
        </Container>
      </Background>
    );
  } 

  else {
    return (
      <Background>
        <Container
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
        >
        <Logo source={require('../../assets/logo-login.png')} />
          <AreaForm>
  
            <FormInput
              label='Nome'
              placeholder='Digite seu nome'
              type='name'
              value={name}
              onChangeText={(text) => setName(text)}
              returnKeyType={'go'}
            />
  
            <FormInput
              label='E-mail'
              placeholder='Digite seu e-mail'
              type='email'
              value={email}
              onChangeText={(text) => setEmail(text)}
              returnKeyType={'go'}
            />
  
            <FormInput
              label='Senha'
              placeholder='Digite sua senha'
              type='password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType={'go'}
            />
  
            <BtnArea onPress={() => handleSignUp(name, email, password)}>
              {loading ?
                <ActivityIndicator color={'#FFF'} size={30} /> :
                <BtnText>Cadastrar</BtnText>
              }
            </BtnArea>
  
            <BtnArea2 onPress={() => {
              setEmail('');
              setName('');
              setPassword('');
              setLogin(true);
              }}>
              <BtnText2>Já possui uma conta?</BtnText2>
            </BtnArea2>
          </AreaForm>
        </Container>
      </Background>
    );
  }
};