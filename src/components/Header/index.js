import React from 'react';
import { HeaderContainer, Logo } from './styles';
import UserButton from '../UserButton';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <UserButton />
        </HeaderContainer>
    );
}