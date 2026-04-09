import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { s, ms } from 'react-native-size-matters';

interface TituloProps{
  titulo : string
}

const TituloPagina = ({titulo} : TituloProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} adjustsFontSizeToFit>{titulo}</Text>
      <View style={styles.linha}/>
    </View>
  )
}

export default TituloPagina

const styles = StyleSheet.create({
  container:{
    width: '100%',
    alignItems: 'flex-start',
    paddingTop: s(40),
    paddingLeft: s(20),
    flexDirection: 'column'
  },

  linha:{
    width: s(140),
    height: 4,
    backgroundColor: '#00E5FF',
    shadowColor: '#00E5FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 5,
    borderRadius: 2,
  },

  titulo: {
    fontSize: ms(24),
    color: '#FFFFFF',
    fontFamily: 'System',
    fontWeight: 'bold',
    letterSpacing: 1,
  }
})