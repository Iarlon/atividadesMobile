import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {

  const [mensagem, setMensagem] = useState("");
  const scale = useRef(new Animated.Value(1)).current;

  const animarClique = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.9, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();

    setMensagem("Bem-vindo ao meu app!");
  };

  return (
    <ThemedView style={styles.container}>

      <ThemedText style={styles.title}>
        Iarlon Soares da Silva Oliveira
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Sistemas de Informação
      </ThemedText>

      <ThemedText style={styles.quote}>
        AQUI TEM UM BANDO DE LOUCOS (mensagem de apoio ao timao)
      </ThemedText>

      <Image
        source={require('../../assets/images/coringao.jpg')}
        style={styles.image}
      />

      <ThemedText style={styles.call}>
        Clique no botão abaixo
      </ThemedText>

      <Pressable onPress={animarClique}>
        <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
          <ThemedText style={styles.buttonText}>
            Clique aqui
          </ThemedText>
        </Animated.View>
      </Pressable>

      <ThemedText style={styles.message}>{mensagem}</ThemedText>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 18,
    opacity: 0.8,
  },

  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
    marginVertical: 10,
  },

  call: {
    marginTop: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 5, 
    shadowOpacity: 0.3, 
    shadowRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  message: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
});