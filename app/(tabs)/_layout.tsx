import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#999',
        tabBarActiveBackgroundColor: '#330C2F',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {

          backgroundColor: colorScheme === 'dark' ? '#e8d6e2' : '#ffffff',
          borderTopColor: colorScheme === 'dark' ? '#e6d5e1' : '#e0e0e0',
          borderTopWidth: 1,
          height: 87,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
        },
        tabBarIconStyle:{
          marginTop: 0,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="armario"
        options={{
          title: 'Armario',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="hanger" color={color} />,
        }}
      />
      <Tabs.Screen
        name="outfit-tool"
        options={{
          title: 'Outfit Tool',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="sparkles" color={color} />,
        }}
      />
      <Tabs.Screen
        name="buscar"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
