import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { FullPost } from './FullPost';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{title: 'News'}}
        />
        <Stack.Screen 
          name='FullPost' 
          component={FullPost}
          options={{title: 'Post'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
