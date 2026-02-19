import { Tabs } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Image } from 'react-native';
import { myTheme } from '../src/components/theme';
import { useState } from 'react';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <PaperProvider theme={myTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: myTheme.colors.accent,
          tabBarInactiveTintColor: '#AAAAAA',
          tabBarStyle: { backgroundColor: myTheme.colors.primary, height: 60 },
          headerStyle: { backgroundColor: myTheme.colors.primary },
          headerTintColor: myTheme.colors.text,
          headerTitleAlign: 'center',
          headerLeft: () => (<TouchableOpacity
              onPress={() => alert('Logo presionado')}
              style={{ marginLeft: 15 }}
            >
              <Image
          source={require('../assets/images/favicon.png')}
          style={{
            width: 40,       // ancho del círculo
            height: 40,      // alto del círculo
            borderRadius: 20 // la mitad de 40 → círculo perfecto
          }}
          resizeMode="cover"  // importante para que no se deforme
        />
            </TouchableOpacity>),
          headerRight: () => (
               <TouchableOpacity onPress={() => alert('Perfil presionado')} style={{ marginRight: 15 }}>
        <Ionicons name="person-circle-outline" size={28} color={myTheme.colors.accent} />
      </TouchableOpacity>
            ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'novaVibe',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={28} color={color} />
            ),
          }}
        />

        <Ionicons name="person-circle-outline" size={28} color={isLoggedIn ? myTheme.colors.accent : myTheme.colors.background} /> --- IGNORE ---
        <Tabs.Screen
          name="alta"
          options={{
            title: 'Añadir Categoría',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-plus" size={28} color={color} onPress={()=>setIsLoggedIn(isLoggedIn)} />
            ),
          }}
        />
        <Tabs.Screen
          name="listado"
          options={{
            title: 'Categorías registrados',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="format-list-bulleted" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}
