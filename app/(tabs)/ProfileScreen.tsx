import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ProfileScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#167A9F" barStyle="light-content" />

      {/* --- CABEÇALHO (Igual à Home) --- */}
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={{ fontSize: 32 }}>Q</Text>uickTreat
          </Text>
        </View>

        {/* Menu Superior - Com 'Perfil' Ativo */}
        <View style={styles.navBar}>
          <NavDtItem label="Início" onPress={() => router.push('/(tabs)/HomeScreen')} />
          <NavDtItem label="Convênios" onPress={() => router.push('/(tabs)/ConvenioScreen')} />
          <NavDtItem label="Nova Consulta" onPress={() => router.push('/(tabs)/NovaConsultaScreen')} />
          <NavDtItem label="Consultas" onPress={() => router.push('/(tabs)/ConsultasScreen')} />
          <NavDtItem label="Perfil" active /> 
        </View>
      </View>

      {/* --- CONTEÚDO DO PERFIL --- */}
      <View style={styles.bodyContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Avatar e Nome */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              {/* Imagem de Placeholder (Pode trocar por foto real) */}
              <Ionicons name="person" size={60} color="#FFF" />
            </View>
            <Text style={styles.userName}>João Pedro Mendes</Text>
            <Text style={styles.userEmail}>joao.pedro@email.com</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar Dados</Text>
            </TouchableOpacity>
          </View>

          {/* Lista de Opções */}
          <View style={styles.menuOptions}>
            <MenuOption icon="settings-outline" label="Configurações" />
            <MenuOption icon="shield-checkmark-outline" label="Privacidade e Segurança" />
            <MenuOption icon="card-outline" label="Meus Pagamentos" />
            <MenuOption icon="help-circle-outline" label="Ajuda e Suporte" />
            
            {/* Botão Sair */}
            <MenuOption icon="log-out-outline" label="Sair" isDestructive />
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// --- Componentes Auxiliares ---

// Item do Menu Superior (O mesmo da Home)
const NavDtItem = ({ label, active = false, onPress }: { label: string; active?: boolean; onPress?: () => void }) => (
  <TouchableOpacity style={[styles.navItem, active && styles.navItemActive]} onPress={onPress}>
    <Text style={[styles.navText, active && styles.navTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Item da Lista de Opções
const MenuOption = ({ icon, label, isDestructive = false }: { icon: keyof typeof Ionicons.glyphMap; label: string; isDestructive?: boolean }) => (
  <TouchableOpacity style={styles.optionRow}>
    <View style={styles.optionLeft}>
      <View style={[styles.iconBox, isDestructive && styles.iconBoxDestructive]}>
        <Ionicons name={icon} size={22} color={isDestructive ? "#FF4444" : "#167A9F"} />
      </View>
      <Text style={[styles.optionText, isDestructive && styles.textDestructive]}>
        {label}
      </Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#CCC" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#167A9F',
  },
  
  // --- Cabeçalho ---
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
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  navItemActive: {
     // Fundo sutil se quiser destacar o item ativo
     // backgroundColor: 'rgba(255,255,255,0.2)',
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

  // --- Corpo Branco ---
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    elevation: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // --- Header do Perfil ---
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D9D9D9', // Cinza para o fundo da foto
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#167A9F',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#167A9F',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },

  // --- Lista de Opções ---
  menuOptions: {
    width: '100%',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#EDF7FA', // Azul bem clarinho para o fundo do ícone
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconBoxDestructive: {
    backgroundColor: '#FFEBEE', // Vermelho claro para "Sair"
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  textDestructive: {
    color: '#FF4444',
  },
});