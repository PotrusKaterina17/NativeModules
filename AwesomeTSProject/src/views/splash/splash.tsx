import React, { useEffect } from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { styles } from './styles';

export const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Introduction');
        }, 1500);
    }, [])

    return (
        <ImageBackground style={styles.container} imageStyle={styles.backgroundImage} source={require('../../images/Vector.png')} >
            <View style={styles.titleContainer}>
                <SharedElement id={"title"} >
                    <Text style={styles.title}>{'OUR Retro'}</Text>
                </SharedElement>
            </View>
            <SharedElement id={"image"} >
                <Image style={styles.image} source={require('../../images/company.png')} />
            </SharedElement>
        </ImageBackground>
    );
};