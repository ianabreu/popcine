import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function DetailsScreen({route}) {
  
  const [movie, setMovie] = useState(route?.params?.params);
 return (
   <View>
    <Text>{movie.overview}</Text>
   </View>
  );
}