import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    container: {
        marginVertical: 24
    },
    title: {
        fontSize: 16
    },
    flatList: {
        paddingVertical: 24
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