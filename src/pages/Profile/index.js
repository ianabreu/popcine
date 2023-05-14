import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {
  Container,
  Title,
  InputArea,
  Input,
  Button,
  ButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const { user, signOut, loading, editUser } = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name);
  
  const navigation = useNavigation();

  async function handleSignOut() {
    await signOut();
    navigation.goBack();
  }
  async function saveName(name) {
    if (name.trim() === '') return Alert.alert('Atenção!', 'Preencha seu nome.')
    await editUser(name.trim());
    setModalVisible(false);
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Title>Nome:</Title>
      <InputArea>
        <Input
          value={user?.name}
          editable={false}
        />
        <TouchableOpacity
        style={{
          position: 'absolute',
          right: 10,
        }}
          onPress={() => setModalVisible(true)}
        >
        <Icon
          style={{
            
          }}
          name='edit'
          size={30}
          color='#E0E722'
          />
          </TouchableOpacity>
      </InputArea>

      <Title>E-mail:</Title>

      <Input value={user?.email}
        editable={false} />

      <Button onPress={() => handleSignOut()}>
        {loading ? (<ActivityIndicator color={'#FFF'} size={30} />) :
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.exitArea}></TouchableOpacity>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edite seu nome:</Text>
            <TextInput
              style={styles.input}
              value={nameInput}
              onChangeText={(text) => setNameInput(text)}
            />
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => saveName(nameInput)}>
                {loading ? 
                (<ActivityIndicator color={'rgba(16, 18, 16, 1)'} size={30} />) :
                (<Text style={styles.textStyle}>Salvar</Text>) 
                }
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitArea: {
    flex: 2,
    height: 100,
    backgroundColor: 'rgba(16, 18, 16, 0.5)',
  },
  modalView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(16, 18, 16, 1)',
    padding: 20,
  },
  buttonClose: {
    width: '100%',
    backgroundColor: '#E0E722',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginVertical: 30,
  },
  textStyle: {
    color: '#101210',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#282D28',
    color: '#FFF',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 0,
    textAlign: 'center',
  }
});