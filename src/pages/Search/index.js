import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, InputArea, Input, SearchButton, Icon, ResultArea } from './styles';

import Header from '../../components/Header';
import MovieButton from '../../components/MovieButton';
import { MovieContext } from '../../contexts/movie';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
  const { handleSearch, getTvData, getMovieData } = useContext(MovieContext);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  async function searchList() {
    if (searchText === '') return;
    const data = await handleSearch(searchText);
    setSearchResults(data);

  }

  async function openDetails(data) {
    let response;
    if (data.media_type === 'tv') {
      response = await getTvData(data.id);
    } else {
      response = await getMovieData(data.id);
    }
    navigation.navigate('Details', {
      params: response
    })
  }
  return (
    <Container>
      <Header />
      <InputArea>
        <Input
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={searchList}
        />
        <SearchButton
          onPress={searchList}
        >
          <Icon />
        </SearchButton>
      </InputArea>

      <ResultArea>
        <FlatList
          numColumns={3}
          key={'#'}
          data={searchResults}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (<MovieButton movie={item} goToDetails={openDetails} />)}
        />

      </ResultArea>
    </Container>
  );
}