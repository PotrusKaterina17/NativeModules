import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from '../../views/splash/splash';
import Main from '../../views/main/main';
import React from 'react';
import { Introduction } from '../../views/introduction/introduction';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }) => {
        return {
            cardStyle: {
                opacity: progress
            }
        };
    }
};

export const MainNavigation = createSharedElementStackNavigator();

export const NavigationComponent = () => {
    return (
        <NavigationContainer>
            <MainNavigation.Navigator headerMode="none" mode="modal" initialRouteName="Splash">
                <MainNavigation.Screen name="Splash" component={Splash} />
                <MainNavigation.Screen name="Main" component={Main} />
                <MainNavigation.Screen sharedElementsConfig={() => { return [{ id: `image`, animation: 'fade' },]; }} options={() => options} name="Introduction" component={Introduction} />
            </MainNavigation.Navigator>
        </NavigationContainer>
    );
}