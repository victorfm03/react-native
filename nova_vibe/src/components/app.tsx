// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from '../../app/index';
import { myTheme } from './theme'; // tema con tus colores

export default function App() {
  return (
    <PaperProvider theme={myTheme}>
      <Home />
    </PaperProvider>
  );
}
