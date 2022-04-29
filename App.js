import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from './Screen/Input';
import Output from './Screen/Output';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Знакомство">
      <Stack.Screen
        name="Знакомство"
        component={Input}
        options={{
          headerStyle: {
            backgroundColor: '#E98A88',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name="Добро пожаловать"
        component={Output}
        options={{
          headerStyle: {
            backgroundColor: '#E98A88',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;