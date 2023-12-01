import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";

// Reutilizamos el componente Card
const Card = ({ title, text, imageSrc }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSrc }} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const MenuPrincipal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.bienvenidaText}>¡Bienvenido a nuestro instituto!</Text>
        <Text style={styles.subtituloText}>
          Descubre una experiencia única explorando todas las oportunidades que ofrecemos.
        </Text>
        <View style={styles.cardContainer}>
          {/* Aquí utilizamos el componente Card con los datos apropiados */}
          <Card
            title="Vida Estudiantil"
            text="Sumérgete en la armoniosa vida estudiantil de nuestro instituto. Participa en actividades, eventos y conoce a estudiantes apasionados."
            imageSrc={'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
          <Card
            title="Aulas Modernas"
            text="Nuestras aulas están equipadas con la última tecnología para proporcionar un ambiente de aprendizaje moderno y efectivo."
            imageSrc={'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
          <Card
            title="Biblioteca Inspiradora"
            text="Explora nuestra biblioteca, un lugar tranquilo y lleno de recursos para fomentar el estudio y la investigación."
            imageSrc={'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "white",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  bienvenidaText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  subtituloText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: "100%", // Ocupar todo el ancho disponible
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFF",
    elevation: 4, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
});

export default MenuPrincipal;
