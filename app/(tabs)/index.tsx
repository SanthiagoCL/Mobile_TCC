import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  
  // Função acionada ao pressionar o botão
  const handlePress = () => {
    alert('Você clicou no botão!');
  };

  return (
    // SafeAreaView garante que o conteúdo não fique "atrás" do notch do iPhone ou da barra de status
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Dev!</Text>
        <Text style={styles.subtitle}>Bem-vindo ao seu app Expo.</Text>
      </View>

      {/* Conteúdo Principal (Card) */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.image} 
        />
        <Text style={styles.cardTitle}>React Native + Expo</Text>
        <Text style={styles.cardDescription}>
          Essa é uma estrutura base para você começar a criar suas interfaces móveis.
        </Text>
      </View>

      {/* Botão de Ação */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Começar Projeto</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

// Estilização (Similar ao CSS, mas em JavaScript)
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 20,
    justifyContent: 'center', // Centraliza verticalmente
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Sombra para Android
    marginBottom: 30,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2c3e50',
  },
  cardDescription: {
    textAlign: 'center',
    color: '#7f8c8d',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});