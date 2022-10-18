import React from "react"
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import styles from "./styles"
import Button from "../../../components/button/Button"
import Carousel from "../../../components/carousel/Carousel"

const ProductDetailsScreen = ({route, navigation}) => {
    // destructure product from route params
    const { product } = route?.params || {}
    
    // go back
    const onBack = () => {
        navigation.goBack()
    }

    
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                { product?.images?.length ? 
                    <Carousel data={product?.images} />
                    : <Image style={styles.image} source={ {uri: product?.image} } />
                }
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                {/* absolute back button */}
                <Pressable style={styles.backContainer} onPress={onBack}>
                    <Image style={styles.backImage} source={require("../../../assets/icons/back.png")} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.footerImageContainer}>
                    <Image style={styles.footerImage} source={require("../../../assets/icons/marker-active.png")} />
                </View>
                <Button title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetailsScreen)