import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../contexts/auth';
import {
  Container,
  Title,
  InputArea,
  Input,
  Button,
  ButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

export default function Profile() {
  const navigation = useNavigation()
  const { user, signOut, loading } = useContext(AuthContext);
  async function handleSignOut() {

    await signOut();
    navigation.goBack();
  }

  return (
    <Container>
      <Title>Nome:</Title>
      <InputArea>
        <Input
          value={user?.name}
          editable={false}
        />
        <Icon
          style={{
            position: 'absolute',
            right: 10
          }}
          name='edit'
          size={30}
          color='#E0E722'
        />
      </InputArea>

      <Title>E-mail:</Title>

      <Input value={user?.email}
        editable={false} />

      <Button onPress={() => handleSignOut()}>
        {loading ? (<ActivityIndicator color={'#FFF'} size={30}/>) :
          (
            <>
              <ButtonText>Sair</ButtonText>
              <Icon
                name='exit-to-app'
                size={30}
                color='#FFF'
              />
            </>
          )
        }
      </Button>

    </Container>
  );
}