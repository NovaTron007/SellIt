import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
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
    title: {
        fontSize: 12,
        fontWeight: "400",
        color: colors.textGrey
    },
    input: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.blue,
        paddingBottom: 0
    },

})

export default styles