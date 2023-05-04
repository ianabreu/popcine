import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';


import styled from "styled-components/native";
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../contexts/auth';

export default function UserButton() {
    const {hasUser} = useContext(AuthContext);

    return (
        <TouchableOpacity onPress={ () => hasUser() }>
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