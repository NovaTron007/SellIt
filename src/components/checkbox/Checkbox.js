import React from 'react'
import { TouchableOpacity, View, Image } from "react-native"
import styles from "./styles"

const Checkbox = ({checked, setChecked}) => {
    
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={() => setChecked(!checked)}>
            {/* show grey bg innerContainer when checked */}
            { checked ? 
                <View style={styles.innerContainer}>
                    <Image source={require("../../assets/icons/checked.png")} style={styles.image} />
                </View>  
                : null 
            }
        </TouchableOpacity>
    )
}

export default React.memo(Checkbox)