import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { fonts } from '../utils/fonts'
const InputField = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
        if (props.onFocus) props.onFocus();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (props.onBlur) props.onBlur();
    };
    return (
        <View style={styles.container}>
            {props.label && <Text style={[styles.label, isFocused || props.value ? styles.labelFocused : null]}>{props.label}</Text>}
            <TextInput
                style={[styles.input, isFocused && styles.inputFocused, { ...props.inpStyle }]}
                onChangeText={props.onChangeText}
                value={props.value}
                multiline={props.multiline}
                editable={props.editable}
                autoCapitalize={props.autoCapitalize}
                keyboardType={props.keyboardType}
                placeholderTextColor={props.placeholderTextColor}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSubmitEditing={props.onSubmit}
                autoFocus={props.autoFocus}
            />
        </View>
    )
}

export default InputField


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    inputFocused: {
        borderColor: fonts.PRIMARY_COLOR
    },
    label: {
        position: 'absolute',
        left: 0,
        top: 20,
        fontFamily: fonts.LATO_REGULAR,
        fontSize: 15,
        color: '#666',
    },
    labelFocused: {
        top: 0,
        fontSize: 12,
        color: '#000', // Change to your focused color
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#333',
    },
});