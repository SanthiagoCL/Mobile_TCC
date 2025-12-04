import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Modal,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (title: string, message: string) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#167A9F" barStyle="light-content" />

      {/* Modal de Alerta Customizado */}
      <Modal
        visible={alertVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>{alertTitle}</Text>
            <Text style={styles.alertMessage}>{alertMessage}</Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- CABEÇALHO --- */}
      <View style={styles.headerContainer}>
        {/* Logo (Simulado com Texto) */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={{ fontSize: 32 }}>Q</Text>uickTreat
          </Text>
        </View>

        {/* Menu de Navegação Superior */}
        <View style={styles.navBar}>
          <NavDtItem label="Convênios" onPress={() => router.push('/(tabs)/ConvenioScreen')} />
          <NavDtItem label="Nova Consulta" onPress={() => router.push('/(tabs)/NovaConsultaScreen')} />
          <NavDtItem label="Consultas" onPress={() => router.push('/(tabs)/ConsultasScreen')} />
          <NavDtItem label="Perfil" onPress={() => router.push('/ProfileScreen')} active={undefined} />
        </View>
      </View>

      {/* --- CONTEÚDO BRANCO (CORPO) --- */}
      <View style={styles.bodyContainer}>
        
        <Text style={styles.sectionTitle}>Exames e Consultas</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Card de Agendamento */}
          <View style={styles.card}>
            {/* Faixa Azul Lateral */}
            <View style={styles.cardLeftBorder} />
            
            <View style={styles.cardContent}>
              
              {/* Coluna de Data/Hora */}
              <View style={styles.dateColumn}>
                <Text style={styles.timeText}>09:00</Text>
                <Text style={styles.dateText}>28/09</Text>
              </View>

              {/* Informações do Paciente */}
              <View style={styles.infoColumn}>
                <Text style={styles.patientName} numberOfLines={1}>
                  João Pedro Mendes Fernandes
                </Text>
                <Text style={styles.procedureText}>
                  Manutenção Ortodôntica
                </Text>
              </View>

              {/* Botões de Ação */}
              <View style={styles.actionsColumn}>
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: '#00C851' }]}
                  onPress={() => {
                    console.log('Check button pressed');
                    showAlert('Sucesso', 'Consulta confirmada');
                  }}
                >
                  <Ionicons name="checkmark" size={24} color="#00C851" />
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.actionBtn, { borderColor: '#FF4444' }]}
                  onPress={() => {
                    console.log('Close button pressed');
                    showAlert('Cancelado', 'Consulta cancelada');
                  }}
                >
                  <Ionicons name="close" size={24} color="#FF4444" />
                </TouchableOpacity>
              </View>

            </View>
          </View>

          {/* (Opcional) Outro card para exemplo */}
          {/* Você pode duplicar o bloco <View style={styles.card}> ... </View> aqui */}

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// Componente auxiliar para os itens do menu
type NavDtItemProps = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

const NavDtItem: React.FC<NavDtItemProps> = ({ label, active, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Text style={[styles.navText, active && styles.navTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#167A9F', // Azul do fundo (Topo)
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
     // Fundo branco sutil atrás do logo se necessário, ou transparente
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    // Na imagem o logo parece estar sobre uma "aba" branca ou solto
  },
  logoText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
     
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#8BC6E3', // Azul claro do menu
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '95%',
    justifyContent: 'space-around',
    elevation: 3,
  },
  navItem: {
    paddingHorizontal: 5,
  },
  navText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000000ff',
    fontStyle : 'normal',
    textDecorationColor: 'underline',
  },

  
  
  navTextActive: {
    color: '#000', // Destaque para o item ativo
    fontWeight: 'bold',
    fontStyle : 'normal',
  },

  // --- Estilos do Corpo Branco ---
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30, // Arredondamento superior
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#167A9F',
    textAlign: 'center',
    marginBottom: 30,
  },
  scrollContent: {
    paddingBottom: 20,
  },

  // --- Estilos do Card ---
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 20,
    // Sombra do Card
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5, 
    overflow: 'hidden', // Para a borda lateral respeitar o radius
    minHeight: 100,
    

  },
  cardLeftBorder: {
    width: 15, // Largura da faixa azul lateral
    backgroundColor: '#167A9F',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  
  // Colunas internas do Card
  dateColumn: {
    alignItems: 'center',
    marginRight: 15,
    minWidth: 50,
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9B51E0', // Roxo (Horário)
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#167A9F', // Azul (Data)
  },
  
  infoColumn: {
    flex: 1, // Ocupa o espaço restante
    justifyContent: 'center',
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  procedureText: {
    fontSize: 14,
    color: '#666',
  },

  actionsColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  actionBtn: {
    width: 35,
    height: 35,
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  // --- Estilos do Modal de Alerta ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    width: '85%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#167A9F',
    marginBottom: 10,
    textAlign: 'center',
  },
  alertMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  alertButton: {
    backgroundColor: '#167A9F',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  alertButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  }
});