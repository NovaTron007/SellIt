import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        marginVertical: 16,
        backgroundColor: colors.white,
        borderRadius: 8, 
        // box shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    heading: {
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 25,
        color: colors.blue
    },
    title: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 15,
        color: colors.textGrey,
    },    
    image: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 8,
    },
    content: {
        flex: 1, // allow title, price container to grow fully
    }
})

export default styles