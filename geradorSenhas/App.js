import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState("");

  function gerarSenha() {
    let senha = "";
    const n = charset.length;
    for (let i = 0; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n)); 
    }
    setSenhaGerada(senha);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>LockGen</Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textbutton}>Gerar Senhas</Text>
      </TouchableOpacity>
      
     
      <Text style={styles.genText}>{senhaGerada}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textbutton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#333",
    width: "70%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  genText: {
    marginTop: 20, 
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
  },
});
