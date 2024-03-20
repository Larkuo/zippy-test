import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import { Login } from '../pages';


function App(): React.JSX.Element {
    return (
      <ToastProvider>
        <Login />
      </ToastProvider>
    );
}

export default App;
