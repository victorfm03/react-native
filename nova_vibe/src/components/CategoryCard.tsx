import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Avatar, IconButton, Button } from 'react-native-paper';

interface CategoryProps {
  id_category: number;
  category_name: string;
  description: string;
  creation_date: string;
  like_count: number;
  seasonal_product_available: boolean;
  onDelete: (id: number) => void;
}

export function CategoryCard({ id_category, category_name, description, creation_date, like_count, seasonal_product_available, onDelete }: CategoryProps) {
  return (
    <Card style={styles.card} mode="elevated">
      {/* Cabecera con Avatar e Icono de Borrado */}
      <Card.Title
        title={category_name}
        titleVariant="titleLarge"
        subtitle="categoria de Productos"
        right={(props) => (
          <IconButton 
            {...props} 
            icon="delete-outline" 
            iconColor="#B00020" 
            onPress={() => onDelete(id_category)} 
          />
        )}
      />

      <Card.Content style={styles.content}>
        <Text variant="bodyMedium" numberOfLines={3} style={styles.bio}>
          {description || "Sin descripción disponible."}
        </Text>
        <Text variant="bodyMedium" numberOfLines={3} style={styles.bio}>
          {creation_date || "Sin fecha de creación disponible."}
        </Text>
        <Text variant="bodyMedium" numberOfLines={3} style={styles.bio}>
          {like_count || 0} likes
        </Text>
        <Text variant="bodyMedium" numberOfLines={3} style={styles.bio}>
          {seasonal_product_available ? "Producto disponible" : "Producto no disponible"}
        </Text>
      </Card.Content>

      {/* Acciones adicionales (Opcional: Ver detalle o Editar) */}
      <Card.Actions>
        <Button mode="text" onPress={() => console.log('Ver más no hace nada', id_category)}>
          Ver más
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 8,
  },
  bio: {
    color: '#444',
    lineHeight: 20,
  }
});