import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Checkbox, Text, TextInput } from 'react-native-paper';
import api from '../src/services/api';

export default function AltaCategoria() {
  // Estado para el formulario basado en tu JSON de la API
  const [form, setForm] = useState({
    category_name: '',
    description: '',
    creation_date: '',
    like_count: 0,
    seasonal_product_available: false,
  });

  const [loading, setLoading] = useState(false);

  // Helper para mostrar alert con fallback en web
  const showAlert = (title: string, message?: string) => {
    if (Platform.OS === 'web') {
      // window.alert funciona en la web (Expo web)
      window.alert(title + (message ? '\n\n' + message : ''));
    } else {
      Alert.alert(title, message);
    }
  };

  // Función para enviar los datos
  const handleSave = async () => {
    console.log('[AltaCategoria] handleSave called — form:', form);
    // Validación simple
    if (!form.category_name || !form.description) {
      showAlert('Error', 'Por favor, rellena al menos el nombre y la descripción.');
      return;
    }

    setLoading(true);
    try {
      // Usamos el endpoint para el alta
      await api.post('/category', form);
      
      showAlert('Éxito', 'Categoria guardado correctamente');
      
      // Limpiar formulario tras éxito
      setForm({
        category_name: '',
        description: '',
        creation_date: '',
        like_count: 0,
        seasonal_product_available: false,
      });
    } catch (error: any) {
      // El interceptor que creamos antes manejará el log,
      // aquí mostramos el error en consola y al usuario.
      console.error('[AltaCategoria] save error:', error);
      showAlert('Error', error?.mensaje || 'No se pudo guardar el Categoria');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>Nueva Categoria</Text>
      
      <TextInput
        label="Nombre de la Categoria"
        value={form.category_name}
        onChangeText={(text) => setForm({ ...form, category_name: text })}
        mode="outlined"
        style={styles.input}
        placeholder="Ej: John Ford"
      />

      <TextInput
        label="Fecha de Creación (AAAA-MM-DD)"
        value={form.creation_date}
        onChangeText={(text) => setForm({ ...form, creation_date: text })}
        mode="outlined"
        style={styles.input}
        placeholder="2024-01-01"
      />

      <TextInput
        label="popularidad (likes)"
        value={form.like_count.toString()}
        onChangeText={(text) => setForm({ ...form, like_count: parseInt(text) || 0 })}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Descripción"
        value={form.description}
        onChangeText={(text) => setForm({ ...form, description: text })}
        mode="outlined"
        multiline
        numberOfLines={4}
        style={styles.input}
      />

      <Checkbox.Item
        label="Producto de temporada disponible"
        status={form.seasonal_product_available ? 'checked' : 'unchecked'}
        onPress={() => setForm({ ...form, seasonal_product_available: !form.seasonal_product_available })}
      />

      <Button 
        mode="contained" 
        onPress={handleSave} 
        loading={loading}
        disabled={loading}
        icon="content-save"
        style={styles.button}
      >
        Guardar Categoria
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 20,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
  },
});