import React, { useContext } from 'react';
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native';
import { Container, FavoritesArea, Title } from './styles';
import { BtnArea, BtnText } from '../Login/styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import MovieButton from '../../components/MovieButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')
export default function Favorites() {
  const { user, userFavorites } = useContext(AuthContext);
  const navigation = useNavigation();

  function openDetails(data) {
    navigation.navigate('Details', { params: data })
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <FavoritesArea>
        <Title>Favoritos</Title>
        <View style={{
          flex: 1,
          alignItems: 'stretch',
          width: '90%',
        }}>
          {user ?
            <FlatList
              numColumns={3}
              key={'#'}
              data={userFavorites}
              ListEmptyComponent={(<EmptyList userName={user?.name} />)}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <MovieButton
                  movie={item}
                  goToDetails={openDetails}
                />
              )}
            />
            :
            <View
              style={{
                flex: 1,
                width: width * 0.9,
                height: height * 0.6,
                justifyContent: 'center'
              }}
            >
              <Title>Faça login para acessar seus filmes favoritos</Title>
              <BtnArea style={{width: width * 0.9}} onPress={() => navigation.navigate('SignIn')}>
                <BtnText>Fazer Login</BtnText>
              </BtnArea>
            </View>
          }

        </View>
      </FavoritesArea>
    </Container>
  );
}

function EmptyList({ userName }) {
  return (
    <View
      style={{
        flex: 1,
        width: width * 0.9,
        height: height * 0.6,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Title>Olá {userName}!</Title>
      <Title>Sua lista de favoritos está vazia.</Title>
    </View>
  )


}