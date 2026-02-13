// theme.ts
import { DefaultTheme } from 'react-native-paper';

export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003d00',       // verde oscuro para header
    accent: '#FFD700',        // dorado para iconos
    background: '#F0F8FF',    // fondo de pantalla
    surface: '#FFFFFF',        // fondo de tarjetas
    text: '#FFFFFF',           // texto en header
    placeholder: '#888888',
  },
};
