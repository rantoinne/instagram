import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feeds, NewPost, Comments } from '@screens';

const Stack = createNativeStackNavigator();

const CommonStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Home" options={{ header: () => null }} component={Feeds} />
      <Stack.Screen name="NewPost" options={{ header: () => null }} component={NewPost} />
      <Stack.Screen name="Comments" options={{ header: () => null }} component={Comments} />
    </Stack.Navigator>
  );
}

export default CommonStack;
