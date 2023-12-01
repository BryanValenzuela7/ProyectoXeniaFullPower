import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";

const MenuPrincipal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.bienvenidaText}>¡Bienvenido al Menú Principal!</Text>
        <View style={styles.cardContainer}>

          <View style={styles.card}>
            <Image
              source={{ uri: 'URL_DE_TU_IMAGEN_1' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Card 1</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'URL_DE_TU_IMAGEN_2' }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Card 2</Text>
          </View>

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
    height: '80%'
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bienvenidaText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 250,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  cardText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});

export default MenuPrincipal;
