import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 24,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    },
    content: {
        flexDirection: "row",
        flex: 1 // allow title, price container to grow fully
    },
    title: {
        fontSize: 14,
        color: colors.textGrey,
        marginBottom: 8
    },
    price: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "700"
    },    
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 20
    },
    iconContainer: {
        maxHeight: 24
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8    
    }
})

export default styles