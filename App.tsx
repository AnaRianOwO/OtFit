import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import OtfitCreator from './screens/OtfitCreator';
import ColorsSelect from './screens/ColorsSelect';
import StyleSelect from './screens/StyleSelect';

type RootStackParamList = {
  Home: undefined;
  OtfitCreator: undefined;
  NuevaPantalla: undefined;
};

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
          name="ColorsSelect" 
          component={ColorsSelect}
          options={{ title: 'Seleccionar colores favoritos' }}
        />
        <Stack.Screen 
          name="StyleSelect" 
          component={StyleSelect}
          options={{ title: 'Seleccionar estilos favoritos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
