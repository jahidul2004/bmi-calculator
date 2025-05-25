import React, { useState } from "react";
import {
    Alert,
    Linking,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100;

        if (!w || !h) {
            setBmi("");
            setCategory("Please enter valid values");
            return;
        }

        const bmiValue = w / (h * h);
        setBmi(bmiValue.toFixed(1));

        if (bmiValue < 18.5) setCategory("Underweight");
        else if (bmiValue < 24.9) setCategory("Normal");
        else if (bmiValue < 29.9) setCategory("Overweight");
        else setCategory("Obese");
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7B66FF" barStyle="light-content" />

            <Text style={styles.title}>BMI Calculator</Text>

            <TextInput
                placeholder="Enter weight (kg)"
                placeholderTextColor="#aaa"
                style={styles.input}
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />

            <TextInput
                placeholder="Enter height (cm)"
                placeholderTextColor="#aaa"
                style={styles.input}
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />

            <TouchableOpacity style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            {bmi !== "" && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Your BMI: {bmi}</Text>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            )}

            <View
                style={{
                    marginVertical: 10,
                    padding: 10,
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        marginBottom: 4,
                    }}
                >
                    Developed By
                </Text>
                <Text
                    onPress={() => {
                        Alert.alert(
                            "Jahidul Islam Jihad",
                            "👋 Hello! I am Jihad,\na student of the Department of CST at Shyamoli Ideal Polytechnic Institute.\n\n🎓 Board Roll: 654779\n🆔 College ID: 534/21 CST-111",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () =>
                                        console.log("Cancel Pressed"),
                                    style: "cancel",
                                },
                                {
                                    text: "Visit Portfolio",
                                    onPress: () =>
                                        Linking.openURL(
                                            "https://jahiduljihad.netlify.app"
                                        ),
                                },
                                {
                                    text: "OK",
                                    onPress: () => console.log("OK Pressed"),
                                },
                            ],
                            { cancelable: true }
                        );
                    }}
                    style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#7B66FF",
                    }}
                >
                    Jahidul Islam Jihad
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4FC",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#3D3B40",
        marginBottom: 40,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
        borderColor: "#ddd",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        backgroundColor: "#7B66FF",
        paddingVertical: 14,
        width: "100%",
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    resultContainer: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        width: "100%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    resultText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    categoryText: {
        fontSize: 18,
        color: "#7B66FF",
        marginTop: 10,
    },
});
