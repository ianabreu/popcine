import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { MovieRow, SectionTitle, Capa } from './styles';

export default function MovieList({ data }) {
  return (
    <MovieRow>
      <SectionTitle>{data.title}</SectionTitle>
      <FlatList
        horizontal
        data={data.items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (<Movie movie={item} />)}
      />
    </MovieRow>
  );
}

/*---------------Componente Horizontal-------------------------*/
export function Movie({ movie }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={()=> alert(`clicou em ${movie.title || movie.original_title || movie.original_name} com o id ${movie.id}`)}>
      <Capa
      source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
      />
    </TouchableOpacity>
  );
}