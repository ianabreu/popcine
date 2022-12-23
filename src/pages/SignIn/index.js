import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background, Container, AreaForm, Logo, BtnArea, BtnText, BtnArea2, BtnText2 } from './styles';
import FormInput from '../../components/FormInput';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

          <BtnArea>
            <BtnText>Entrar</BtnText>
          </BtnArea>

          <BtnArea2>
            <BtnText2>Não tenho uma conta</BtnText2>
          </BtnArea2>
        </AreaForm>
      </Container>
    </Background>
  );
};