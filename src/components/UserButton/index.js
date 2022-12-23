import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';

export default function UserButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}}>
            <User />
        </TouchableOpacity>
    );
}

export const User = styled(Feather).attrs({
    name: 'user',
    size: 30,
})`
color: #31D618;
`