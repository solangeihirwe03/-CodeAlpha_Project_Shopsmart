import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarActiveTintColor: '#01AFF6',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: "#64757B",
          height: 70
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={'white'}
              size={35}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              color='white'
              size={35}
            />
          ),
          tabBarLabel: () => null
        }}
      />
      <Tabs.Screen
        name='wishlist'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              color='white'
              size={35}
            />
          ),
          tabBarLabel: () => null
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              color='white'
              size={35}
            />
          ),
          tabBarLabel: () => null
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color='white'
              size={35}
            />
          ),
          tabBarLabel: () => null
        }}
      />
    </Tabs>
  );
}
