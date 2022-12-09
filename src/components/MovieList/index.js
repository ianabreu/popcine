import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { MovieRow, SectionTitle, Capa } from './styles';

function MovieList({ data }) {
  return (
    <MovieRow>
      <SectionTitle>{data.title}</SectionTitle>
      <FlatList
        horizontal
        data={data.itens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FilmeUnico filme={item} />}
      />
    </MovieRow>
  );
}
export default MovieList;

/*---------------Componente Horizontal-------------------------*/
export function FilmeUnico({ filme }) {
  return (
    <TouchableOpacity onPress={()=> alert(`clicou em ${filme.title} com o id ${filme.id}`)}>
      <Capa
      source={{ uri: `https://image.tmdb.org/t/p/w500/${filme.poster_path}` }}
      />
    </TouchableOpacity>
  );
}