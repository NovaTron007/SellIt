import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from "./styles"

const EditableInput = ({title, placeholder, editable, value, onChange}) => { // pass editable prop to trigger editable
    // onChangeText will get input value
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder} value={value} editable={editable} onChangeText={onChange} />
        </View>
    )
}

export default EditableInput