import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container, FavoritesArea, Title } from './styles';

import { AuthContext } from '../../contexts/auth';
import { openDetails } from '../Home/index';
import Header from '../../components/Header';
import MovieButton from '../../components/MovieButton';

export default function Favorites() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7scbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac98afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58695a0f-3da1-471f-bd9t-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aedt-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4fe-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd9e-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7scbea-c1b1-46c2-aede-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac9eafc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '5869wa0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const {user} = useContext(AuthContext);
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <FavoritesArea>
      <Title style={{color: '#FFF'}}>Favoritos</Title>
      
      <FlatList
          numColumns={3}
          key={'#'}
          data={DATA}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (<MovieButton movie={item} goToDetails={openDetails} />)}
        />
        </FavoritesArea>
    </Container>
  );
}