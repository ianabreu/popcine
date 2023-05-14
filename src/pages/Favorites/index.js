import React, { useContext } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { Container, FavoritesArea, Title } from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import MovieButton from '../../components/MovieButton';
import { useNavigation } from '@react-navigation/native';

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

        </View>
      </FavoritesArea>
    </Container>
  );
}

function EmptyList({ userName }) {
  const { width, height } = Dimensions.get('window')
  return (
    <View
      style={{
        flex: 1,
        width: width,
        height: height * 0.7,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Title>Olá {userName}!</Title>
      <Title>Sua lista de favoritos está vazia.</Title>
    </View>
  )


}