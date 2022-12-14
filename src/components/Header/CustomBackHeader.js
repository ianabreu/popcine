import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import {
    HeaderContainer, Logo, User
} from './styles';

export default function CustomBackHeader() {
    return (
        <View >
            <TouchableOpacity>
                <User />
            </TouchableOpacity>
        </View>
    );
}