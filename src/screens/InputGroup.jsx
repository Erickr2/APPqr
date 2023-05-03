import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    width: '40%',
    backgroundColor: 'darkgrey',
    margin: 25

  },
  view: {
    flex: 1,
    backgroundColor: 'white'
  },
  textButton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
    borderRadius: 15,
  },
  bigText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: "black"
  },
  input: {
    width: 230,
    height: 50,
    margin: 50,
    borderWidth: 4,
    padding: 10,
    alignSelf: 'center',
    borderColor: 'aliceblue',
    fontSize: 18
  },

})

const InputGroup = () => {

  const [text, onChangeText] = useState('');

<<<<<<< HEAD
  const navigation = useNavigation();

=======
>>>>>>> 28c12b38334f560780e4944df9f8a89d0c0f8384
  const reset = () => { //pasar funcion para hacer limpieza del input 
    onChangeText('');
  }

  return (
    <View style={{ ...styles.view }}>
      <Image
        style={{ width: 250, height: 220, alignSelf: 'center', margin: 20 }}
        source={require('../imgs/logoUTC2.png')}
      />

      <Text style={{ ...styles.bigText }}>
        Ingresa el
      </Text>
      <Text style={{ ...styles.bigText }}>
        ID del
      </Text>
      <Text style={{ ...styles.bigText }}>
        grupo
      </Text>

      <TextInput
        style={{ ...styles.input }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ejemplo: ZLSIS2A"
      />

      <TouchableOpacity
<<<<<<< HEAD
        onPress={() => navigation.navigate("Camera", {grupo:text}, reset())} //aqui se llama la funcion para abrir la camara y pasar asistencia 
=======
        onPress={() => navigation.navigate("QRgenerator")} //aqui se llama la funcion para abrir la camara y pasar asistencia 
>>>>>>> 28c12b38334f560780e4944df9f8a89d0c0f8384
        style={{ ...styles.button }}
        disabled={(!text || text.length < 4)? true : false}
      >
        <Text
          style={{ ...styles.textButton }}> Siguiente </Text>
      </TouchableOpacity>
    </View>
  )
}

export default InputGroup
