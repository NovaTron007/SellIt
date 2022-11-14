import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header/Header"
// image picker
import { launchImageLibrary } from "react-native-image-picker"
import styles from "./styles"
import Input from "../../../components/input/Input"

const CreateListingScreen = ({ navigation }) => {
    // set images from uploadImage
    const [images, setImages] = useState([])
    // loading
    const [loading, setLoading] = useState(false)
    // input values: object
    const [values, setValues] = useState({})

    // go back
    const goBack = () => {
        navigation.goBack()
        console.log("goBack")
    }

    // upload image function using launchImageLibrary
    const uploadImage = async() => {
        const options = { selectionLimit: 2 }
        let result = await launchImageLibrary(options)// returns assets obj with arr objects: result.assets?.[0].fileName)
        if(result?.assets?.length) {
            console.log("assets:", result?.assets)
            setImages((prev) => [...prev, ...result?.assets])
        } else {
            console.log("an errors ocurred: ", result.error)
        }
    }

    // remove image
    const removeImage = (item) => {
        // return new array without item.fileName
        setLoading(true)
        setImages((images) => {
            const updatedImages = images.filter((imageItem) => imageItem?.fileName !== item?.fileName)
            return updatedImages
        })
        setLoading(false)
        // OR:
        // let updatedImages = images.filter((imageItem) => imageItem.fileName !== item.fileName)
        // setImages(updatedImages)
    }

    // onChange
    const handleInputOnChange = (key, value) => {
        setValues((prev) => ({...prev, [key]:value}))
        console.log("values: ", values)
    }



    return (
        <SafeAreaView>
            <KeyboardAvoidingView behaviour="position">
                <ScrollView>
                    <Header title="Create Listing" showBackBtn onPressCb={goBack} />
                    <View style={styles.container}>
                        <Text style={styles.title}>Upload photos</Text>
                        <TouchableOpacity style={styles.uploadContainer} onPress={uploadImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <View style={styles.imagesContainer}>
                        { images?.map((item, index) => {
                            return(
                                <View key={`${item?.fileName}-${index}`}>
                                    <Pressable style={styles.closeIconContainer} onPress={() => removeImage(item)}>
                                        <Image style={styles.closeIcon} source={require("../../../assets/icons/close.png")} />
                                    </Pressable>
                                    <Image source={{uri: item?.uri}} style={styles.image}/> 
                                </View>
                            )
                        })}
                        </View>
                        {/* native loader */}
                        { loading ? <ActivityIndicator /> : null }

                        <Input 
                            labelText="Title" 
                            placeholder="Listing title"
                            onChangeCb={(value) => handleInputOnChange("title", value)} />
                        <Input 
                            labelText="Price" 
                            placeholder="Enter price in HKD" 
                            onChangeCb={(value) => handleInputOnChange("price", value)} 
                            keyboardType="numeric" />
                        <Input 
                            labelText="Description" 
                            placeholder="Enter a description"  
                            onChangeCb={(value) => handleInputOnChange("title", value)} 
                            multiline 
                            style={styles.textAreaContainer} />

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListingScreen)