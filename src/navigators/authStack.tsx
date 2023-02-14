import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '@screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" options={{ header: () => null }} component={Login} />
      <Stack.Screen name="SignUp" options={{ header: () => null }} component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthStack;
