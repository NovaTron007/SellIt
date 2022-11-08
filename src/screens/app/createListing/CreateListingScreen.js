import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header/Header"
// image picker
import { launchImageLibrary } from "react-native-image-picker"
import styles from "./styles"

const CreateListingScreen = ({ navigation }) => {
    // set images from uploadImage
    const [images, setImages] = useState([])

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
            console.log("an error ocurred: ", result.error)
        }
    }



    return (
        <SafeAreaView>
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
                        console.log("item: ", item)
                        return(
                            <Image key={index} source={{uri: item?.uri}} style={styles.image}/>
                        )
                    })}
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListingScreen)