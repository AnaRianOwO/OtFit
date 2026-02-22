import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
import HomeScreen from './screens/HomeScreen';
import OtfitCreator from './screens/OtfitCreator';
import ColorsSelect from './screens/ColorsSelect';
import StyleSelect from './screens/StyleSelect';
import LogInScreen from './screens/LogInScreen';
import SignInScreen from './screens/SignInScreen';

// type RootStackParamList = {
//   Home: undefined;
//   OtfitCreator: undefined;
//   NuevaPantalla: undefined;
//   Login: undefined;
// };



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen 
          name="OtfitCreator" 
          component={OtfitCreator}
          options={{ title: 'Creador de Outfits' }}
        />
        <Stack.Screen 
          name="ColorsSelect" 
          component={ColorsSelect}
          options={{ title: 'Seleccionar colores favoritos' }}
        />
        <Stack.Screen 
          name="StyleSelect" 
          component={StyleSelect}
          options={{ title: 'Seleccionar estilos favoritos' }}
        />
        <Stack.Screen 
          name="LogIn" 
          component={LogInScreen}
          options={{ title: 'Ingreso' }}
        /> */}
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen}
          options={{ title: 'Ingreso' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
