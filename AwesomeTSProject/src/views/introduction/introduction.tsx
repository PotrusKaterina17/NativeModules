import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { SharedElement } from 'react-navigation-shared-element';

export const Introduction = ({ }) => {

    return (
        <View style={styles.container}>
            <SharedElement id={"title"} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{'OUR Retro'}</Text>
                </View>
            </SharedElement>
            <SharedElement id={"image"} >
                <Image style={styles.image} source={require('../../images/company.png')} />
            </SharedElement>
        </View>
    );
};