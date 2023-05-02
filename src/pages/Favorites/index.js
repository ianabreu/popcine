import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';

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
  ];

  const {user} = useContext(AuthContext);
  return (
    <Container>
      <Text style={{color: '#FFF'}}>{user.name}</Text>
      
      <FlatList 
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Title title={item.title}/>}
      />
    </Container>
  );
}

export function Title({title}) {
  return(
    <Text style={{color: '#FFF'}}>{title}</Text>

  )
}