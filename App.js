import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar, LogBox } from 'react-native';
import { store } from './src/helpers/storeHelpers';
import AppNavigator, { navigationRef } from './src/navigation/navigators/AppNavigator';
import { isIpad } from './src/constants/helper';
import { width } from './src/constants/dimensions';
import colors from './src/constants/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
    isIpad() ? EStyleSheet.build({ $rem: width / 1000 }) : EStyleSheet.build({ $rem: width / 375 });

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer ref={navigationRef} >
                    <AppNavigator />
                    <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
