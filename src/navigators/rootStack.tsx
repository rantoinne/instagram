import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabs } from './bottomTabs';
import AuthStack from './authStack';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';
import { COLOR_CODES } from '@utils';
import { Splash } from '@screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLOR_CODES.WHITE} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
        <Stack.Screen name="Splash" options={{ header: () => null }} component={Splash} />
        <Stack.Screen name="Tabs" options={{ header: () => null }} component={BottomTabs} />
        <Stack.Screen name="Auth" options={{ header: () => null }} component={AuthStack} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;