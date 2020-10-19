import React, { useState, useRef } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export default function ColorForm({ onNewColor = f => f }) {
    const [inputValue, setValue] = useState("");
    const input = useRef();
    return (
        <View style={styles.container} >
            <TextInput
                ref={input}
                style={styles.txtInput}
                value={inputValue}
                onChangeText={setValue}
                autoCapitalize="none"
                placeholder="enter a color.."
            />
            <Button
                title="add"
                onPress={() => {
                    input.current.blur();
                    onNewColor(inputValue);
                    setValue("");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"white"
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
});