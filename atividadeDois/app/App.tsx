import { StyleSheet, Text, View } from 'react-native';
import TituloPagina from '../components/TituloPagina';
import UserCard from '../components/UserCard';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#1e1e24', '#111111']}
      style={styles.container}
    >
      <TituloPagina titulo='Página do usuário'/>
      
      {}
      <View style={styles.content}>
        <UserCard 
          nome="Maria Souza" 
          profissao="Designer de UX" 
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
