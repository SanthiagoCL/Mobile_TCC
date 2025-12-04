import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

// --- Componente do Item de Navegação (Com o Hover que criamos) ---
const NavDtItem = ({ label, active = false, onPress }: { label: string; active?: boolean; onPress?: () => void }) => (
  <Pressable
    style={({ pressed }) => [
      styles.navItem,
      pressed && styles.navItemHover
    ]}
    onPress={onPress}
  >
    {({ pressed }) => (
      <Text 
        style={[
          styles.navText,
          active && styles.navTextActive,
          pressed && styles.navTextHover
        ]}
      >
        {label}
      </Text>
    )}
  </Pressable>
);

export default function ConveniosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#167A9F" barStyle="light-content" />

      {/* --- CABEÇALHO --- */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={{ fontSize: 32 }}>Q</Text>uickTreat
          </Text>
        </View>

      {/* Menu Superior - Note que "Convênios" está com a prop 'active' */}
        <View style={styles.navBar}>
  <NavDtItem label="Início" onPress={() => router.push('/(tabs)/HomeScreen')} />
  <NavDtItem label="Convênios" onPress={() => router.push('/(tabs)/ConvenioScreen')} />
  <NavDtItem label="Nova Consulta" active /> 
  <NavDtItem label="Consultas" onPress={() => router.push('/(tabs)/ConsultasScreen')} />
  <NavDtItem label="Perfil" onPress={() => router.push('/ProfileScreen')} />
        </View>
      </View>

      {/* --- CONTEÚDO (EM MANUTENÇÃO) --- */}
      <View style={styles.bodyContainer}>
        <View style={styles.maintenanceContainer}>
          
          {/* Ícone de Construção/Manutenção */}
          <Ionicons name="construct-outline" size={80} color="#167A9F" style={{ opacity: 0.5 }} />
          
          <Text style={styles.maintenanceTitle}>Em manutenção</Text>
          
          <Text style={styles.maintenanceSubtitle}>
            Aguarde a próxima atualização
          </Text>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#167A9F',
  },
  
  // --- Estilos do Cabeçalho ---
  headerContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#167A9F',
    zIndex: 1,
  },
  logoContainer: {
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', 
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#8BC6E3',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '95%',
    justifyContent: 'space-around',
    elevation: 3,
  },
  navItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  navItemHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  navText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#003366',
  },
  navTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  navTextHover: {
    color: '#FFF',
  },

  // --- Estilos do Corpo ---
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    elevation: 5,
  },
  
  // --- Estilos Específicos da Manutenção ---
  maintenanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maintenanceTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  maintenanceSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  }
});