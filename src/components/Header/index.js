import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
    HeaderContainer, Logo, User
} from './styles';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <TouchableOpacity>
                <User />
            </TouchableOpacity>
        </HeaderContainer>
    );
}