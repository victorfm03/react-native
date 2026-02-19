import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'expo-image';

const placeholderImage = require('@/assets/images/buzzLight year.jpg');

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>

      <View style={styles.imageContainer}>
        <Image source={placeholderImage} style={styles.Image} />
      </View>

      <Text style={styles.subtitle}>
        Bienvenido a nuestra aplicación de gestión de categorías de los productos de temporada. Aquí podrás explorar, añadir y gestionar tus categorías de productos de temporada de manera fácil y eficiente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#1A1818',
  },
  title: {
    color: '#FFFFFF', // blanco fuerte
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: '#FFFFFF', // blanco fuerte
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
