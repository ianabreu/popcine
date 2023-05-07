import React from 'react';
import { HeaderContainer, Logo } from './styles';
import UserButton from '../UserButton';

export default function Header({isHome}) {
    return (
        <HeaderContainer>
            <Logo />
            {isHome && <UserButton />}
        </HeaderContainer>
    );
}