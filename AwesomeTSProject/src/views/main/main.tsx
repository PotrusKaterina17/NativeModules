import React from 'react';
import { View, NativeModules } from 'react-native';
import Button from '../../components/button/button';
import { styles } from './styles';

// const { Example, SyncExample, ExampleWithCallback, ExampleMethodQueue, ExampleSwift } = NativeModules;
const { Example, SyncExample, ExampleWithCallback, ExampleMethodQueue, ExampleSwift } = NativeModules;

const Main = () => {

    const onPressExample = async () => {
        await Example.exampleMethod('example string');
    };

    const onPressSyncExample = () => {
        let phonesName = SyncExample.syncExampleMethod();
        console.log('phonesName', phonesName)
    };

    const callbackForExample = (number) => {
        console.log(`This callback was called in the Native Module ${number}`)
    }

    const onPressExampleWithCallback = () => {
        ExampleWithCallback.exampleWithCallback(callbackForExample);
    };

    const callbackForExampleMethodsQueue = (str) => {
        console.log(`This callback was called in another method's queue and parameter: ${str}`)
    }

    const onPressExampleWithMethodsQueue = () => {
        ExampleMethodQueue.exampleMethodQueue('example param', callbackForExampleMethodsQueue);
    };

    const onPressExampleSwift = () => {
        ExampleSwift.increment();
    };

    return (
        <View style={styles.container}>
            <Button {...{ title: 'Simple Native Module', onPress: onPressExample }} />
            <Button {...{ title: 'Synchronous Native Module', onPress: onPressSyncExample }} />
            <Button {...{ title: 'Native Module with callback', onPress: onPressExampleWithCallback }} />
            <Button {...{ title: 'Native Module with methods queue', onPress: onPressExampleWithMethodsQueue }} />
            <Button {...{ title: 'Native Module Swift', onPress: onPressExampleSwift }} />
        </View>
    );
};

export default Main;
