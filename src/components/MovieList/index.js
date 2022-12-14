import React from 'react';
import { FlatList } from 'react-native';
import { MovieRow, SectionTitle } from './styles';

import MovieButton from '../MovieButton';

export default function MovieList({ data }) {
  return (
    <MovieRow>
      <SectionTitle>{data.title}</SectionTitle>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data.items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (<MovieButton movie={item} />)}
      />
    </MovieRow>
  );
}