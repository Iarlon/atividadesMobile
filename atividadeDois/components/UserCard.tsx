import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { s, vs, ms} from 'react-native-size-matters';

interface UserCardProps {
  nome: string;
  profissao: string;
}

const UserCard = ({nome, profissao} : UserCardProps) => {
    const [status, setStatus] = useState<boolean>(false);
  return (
    <View style={styles.container}>
        <View style={styles.containerInformacoes}>
            <Text style={styles.text}>Seu nome: {nome}</Text>
            <Text style={styles.text}>Sua profissão: {profissao}</Text>
            <Text style={styles.text}>Seu usuário está {status ? "Ativo" : "Inativo"}</Text>
        </View>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => setStatus(!status)}
        activeOpacity={0.7}
      >
        <Text style={styles.botaoTexto}>Modificar Status</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({

    container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vs(20),
  },

  containerInformacoes: {
    width: '100%',
    padding: s(20),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: ms(15),
    borderWidth: 1,
    borderColor: 'rgba(250, 220, 220, 0.2)',
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

  text: {
    padding: s(4),
    color: '#FFFFFF',
    fontSize: ms(15),
    fontFamily: 'System',
    opacity: 0.9,
  },

  botao: {
    backgroundColor: '#841584',
    paddingVertical: vs(12),
    paddingHorizontal: s(25),
    borderRadius: ms(25),
    marginTop: vs(15),
    alignSelf: 'center',
    shadowColor: '#841584',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: ms(14),
    textTransform: 'uppercase',
  }
});