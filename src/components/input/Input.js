import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, Image, Modal, TouchableOpacity } from "react-native"
import styles from "./styles"

const Input = ({ labelText, placeholder, isPassword, value, onChangeCb, style, ...props }) => {
    // set eye on password
    const [passwordHidden, setPasswordHidden] = useState(true)

    // set modal
    const [modal, setModal] = useState(false)

    // handle category change
    const handleCategoryChange = (item) => {
        // const { title } =  item
        // console.log("category: ", item)
        onChangeCb(item) // lift back up to parent inside component props
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    useEffect(() => {
      console.log("value:", value)
    }, [value])
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{labelText}</Text>
            {/* CategoryInput and use dummy input using Text */}
            {props.isSelectInput ?
                (<Pressable style={[styles.inputContainer, style]} onPress={() => setModal(!modal)}>
                    <Text style={styles.input}>{value?.title ? value.title : placeholder}</Text>
                    <Image source={require("../../assets/icons/forward.png")} style={styles.categoryArrow} />
                </Pressable>)
                :
                // else regular TextInput
                (
                    <View style={[styles.inputContainer, style]}>
                        <TextInput
                            style={styles.input}
                            placeholder={placeholder}
                            secureTextEntry={isPassword & passwordHidden ? true : false} // secureTextEntry if passwordHidden
                            value={value} // controlled input
                            onChangeText={onChangeCb} // use cb to set values for react native onChangeText
                            {...props} // get any additional props not destructured in params
                        />
                        {/* if type isPassword show eye */}
                        {isPassword ?
                            <Pressable onPress={() => setPasswordHidden(!passwordHidden)}>
                                <Image style={styles.eye} source={passwordHidden ? require("../../assets/icons/eye.png") : require("../../assets/icons/eye_closed.png")} />
                            </Pressable>
                            : null
                        }
                    </View>)}
            
            {/* activeOpacity show content */}
            { modal ?
                <Modal transparent visible={modal}>
                    {/* activeOpacity to keep modal open */}
                    <TouchableOpacity activeOpacity={1} style={styles.modal} onPress={() => setModal(!modal)}>
                        <TouchableOpacity activeOpacity={1} style={styles.modalContent}> 
                            <Text style={styles.modalTitle}>Select Category</Text>
                            {
                                // map category objects
                                props?.options.map((item, index) => { // use curly for multi-line/return
                                    // don't return popular (popular has no id set to it)
                                    console.log("options item: ", item)
                                    if(!item?.id) {
                                        return null
                                    }

                                    // if current mapped cat id is same as of cat id selected
                                    const selected = value?.id === item?.id

                                    console.log("selected: ", selected)

                                    return <Text 
                                        key={`item.title-${index}`} 
                                        style={[styles.categoryTitle, selected ? styles.selected : {}]} 
                                        onPress={() => handleCategoryChange(item)}>{item.title}</Text>
                                }) 
                            }
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
                : null
            }

        </View>
    )
}

export default React.memo(Input)