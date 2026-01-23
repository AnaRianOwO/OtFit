import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import HomeScreen from './screens/HomeScreen';
import OtfitCreator from './screens/OtfitCreator';
import NuevaPantalla from './screens/NuevaPantalla';

// Define los tipos de rutas
type RootStackParamList = {
  Home: undefined;
  OtfitCreator: undefined;
  NuevaPantalla: undefined;
};

// Para React Navigation 7, NO necesitas pasar tipos genéricos
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
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
          name="NuevaPantalla" 
          component={NuevaPantalla}
          options={{ title: 'Nueva Pantalla' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
