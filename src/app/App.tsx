import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import { UserContextProvider } from '../context/UserContext';
import { AppNavigator } from '../navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';


function App(): React.JSX.Element {
    return (
      <NavigationContainer>
        <UserContextProvider>
          <ToastProvider>
            <AppNavigator />
          </ToastProvider>
        </UserContextProvider>
      </NavigationContainer>
    );
}

export default App;
