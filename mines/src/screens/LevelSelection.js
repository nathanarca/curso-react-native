import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from "react-native";



//difficulty: 0 = easy, 1 = medium, 2 = hard

const LevelSelectButton = ({ level, style, difficulty, onLevelSelect }) => {

    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={() => onLevelSelect(difficulty)} >
            <Text styles={styles.buttonLabel} >{level}</Text>
        </TouchableOpacity>
    )
}


export default props => {

    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType="fade" transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nivel</Text>
                    <LevelSelectButton onLevelSelect={props.onLevelSelect} level={"Molezinha"} difficulty={0.03} style={styles.bgVeryEasy} />
                    <LevelSelectButton onLevelSelect={props.onLevelSelect} level={"Fácil"} difficulty={0.1} style={styles.bgEasy} />
                    <LevelSelectButton onLevelSelect={props.onLevelSelect} level={"Médio"} difficulty={0.2} style={styles.bgMedium} />
                    <LevelSelectButton onLevelSelect={props.onLevelSelect} level={"Difícil"} difficulty={0.3} style={styles.bgHard} />
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({

    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "center",
        padding: 15
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    button: {
        alignItems: "center",
        width: 100,
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: "#EEE",
        fontWeight: "bold",
    },
    bgVeryEasy: {
        backgroundColor: "#03A9F4"
    },
    bgEasy: {
        backgroundColor: "#4CAF50"
    },
    bgMedium: {
        backgroundColor: "#FF9800"
    },
    bgHard: {
        backgroundColor: "#F44336"
    }
});

