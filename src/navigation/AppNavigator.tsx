import React, { useContext } from 'react';
import {
    APP_PAGES, 
    AppParamList, 
} from './AppPages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserContext } from '../context/UserContext';

const AppStack = createNativeStackNavigator<AppParamList>();

export const AppNavigator = () => {
    const {isAuthenticated} = useContext(UserContext);

    const INITIAL_ROUTE = isAuthenticated? 'dashboard' : 'login';

    return (
        <AppStack.Navigator
        initialRouteName={INITIAL_ROUTE}
        screenOptions={{
            gestureEnabled: true,
        }}>
        {Object.entries(APP_PAGES).map(([screenName, data]) => (
            <AppStack.Screen
                key={screenName}
                name={screenName}
                component={data.component}
                options={data.options}
            />
        ))}
        </AppStack.Navigator>
    );
};