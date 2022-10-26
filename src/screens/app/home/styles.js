import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    title: {
        fontSize: 16
    },
    flatList: {
        marginBottom: 8
    },
    productsFlatList: {
        paddingHorizontal: 16
    },
    noProducts: {
        textAlign: "center",
        color: colors.blue,
        fontWeight: "500"
    }
})

export default styles