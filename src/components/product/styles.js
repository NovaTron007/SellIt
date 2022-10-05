import { StyleSheet, Dimensions } from "react-native" // get width of device
import { colors } from "../../utils/colors"

// get width of device
const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8,
    },
    image: {
        width: (width - 64) / 2, // ProductHomeItem sides 2 cols total: 8x4=48, productFlatList container margin: 16 
        height: 220,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    }
})

export default styles