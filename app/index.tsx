import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log("Login acionado:", email);
    router.push('/(tabs)/HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#167A9F" barStyle="light-content" />
      
      {/* KeyboardAvoidingView ajuda a tela subir quando o teclado abre */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        
        {/* Card Central */}
        <View style={styles.card}>
          
          <Text style={styles.title}>Bem vindo!</Text>

          {/* Input Email */}
          <TextInput
            style={styles.input}
            placeholder="Email:"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Input Senha */}
          <TextInput
            style={styles.input}
            placeholder="Senha:"
            placeholderTextColor="#666"
            secureTextEntry={true} // Esconde a senha
            value={password}
            onChangeText={setPassword}
          />

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Links de Rodapé */}
          <View style={styles.footerLinks}>
            <TouchableOpacity>
              <Text style={styles.linkText}>
                Esqueceu sua senha? <Text style={styles.linkBold}>Recuperar</Text>
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ marginTop: 5 }}>
              <Text style={styles.linkText}>
                Deseja cadastrar seu consultório? <Text style={styles.linkBold}>Cadastrar-se</Text>
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Estilos baseados na sua imagem (Color Picking aproximado)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#167A9F', // Azul do fundo principal
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#D9D9D9', // Cinza claro do cartão
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    // Sombras para dar destaque (elevação)
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '900', // Extra bold conforme a imagem
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#C4C4C4', // Cinza mais escuro dos inputs
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    width: '50%', // O botão na imagem é menor que os inputs
    height: 45,
    backgroundColor: '#0FA5E9', // Azul vibrante do botão
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  footerLinks: {
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#0FA5E9', // Mesma cor do botão para o texto clicável
    fontSize: 14,
    textAlign: 'center',
  },
  linkBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
});