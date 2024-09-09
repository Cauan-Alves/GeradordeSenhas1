import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from './src/components/modal/index.js'; // Importa o componente ModalPassword do diretório correto

// Modal é o Popups
// Define um conjunto de caracteres que serão usados para gerar a senha
const charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function App() {
  // Estado para armazenar a senha gerada
  const [senhaGerada, setSenhaGerada] = useState("");
  
  // Estado para controlar a visibilidade do modal
  const [modalVisible, setModalVisible] = useState(false);

  // Função para gerar uma senha aleatória
  function gerarSenha() {
    let senha = "";
    const n = charset.length;
    // Gera uma senha de 10 caracteres
    for (let i = 0; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }
    // Atualiza o estado com a senha gerada e mostra o modal
    setSenhaGerada(senha);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      {/* Exibe a imagem do logo */}
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />

      {/* Exibe o título do aplicativo */}
      <Text style={styles.title}>LockGen</Text>

      {/* Botão para gerar a senha */}
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textbutton}>Gerar Senhas</Text>
      </TouchableOpacity>

      {/* Modal que mostra a senha gerada */}
      <Modal 
        visible={modalVisible} 
        animationType='fade' 
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Fecha o modal ao pressionar o botão de voltar em Android
      >
        {/* Componente ModalPassword exibe a senha e fornece uma função para fechar o modal */}
        <ModalPassword 
          senha={senhaGerada} 
          fecharModal={() => setModalVisible(false)} 
        />
      </Modal>
    </View>
  );
}

// Estilos para o aplicativo
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
