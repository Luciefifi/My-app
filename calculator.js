import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Input } from 'react-native';

export default function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    function addTogether() {
        const newTotal = number1 + number2;
        setTotal(newTotal);
        Alert.alert('Alert', 'Tulos: ' + newTotal); // total has the old value in the render
    }

    return (
        <View style={styles.container}>
            <TextInput
                type="number"
                placeholder="0"
                value={number1}
                onChangeText={v => {
                    setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
                }}
            />
            <TextInput
                type="number"
                placeholder="0"
                value={number2}
                onChange={e => {
                    setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
                }}
            />

            <Button onPress={addTogether} title="Tulos" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    image: {
        width: 250,
        height: 100,
    },
    input: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
    },
});