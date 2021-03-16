import React from 'react';
import { Text, TouchableOpacity, NativeModules } from 'react-native';
import { styles } from './styles';

const { Example } = NativeModules;


const Button = ({ onPress, title }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
