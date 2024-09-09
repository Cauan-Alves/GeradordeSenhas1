import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

export function ModalPassword({senha,fecharModal}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}> Senha Gerada</Text>
                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>{senha}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttonVoltar} onPress={fecharModal}>

                        <Text style={styles.buttonTextVoltar}> Voltar</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSalvar}>

                        <Text style={styles.buttonTextSalvar}> Salvar</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: "white",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 18,
    },
    innerPassword: {
        backgroundColor: "#e6e6e6e6",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between"

    },
    buttonVoltar: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
        border:"purple",
        borderWidth:8
    },
    buttonSalvar: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        backgroundColor: "black",
        borderRadius: 8,
    },
    buttonTextVoltar: {
        fontSize: 20,
    },
    buttonTextSalvar: {
        color: "white",
        fontSize: 20,
    }

})