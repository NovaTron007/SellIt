import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    label: {
        marginBottom: 8, // margin top 
        color: colors.blue,
        fontSize: 14,
        fontWeight: "500"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14
    },
    input: {
        paddingHorizontal: 16, // padding left, right
        paddingVertical: 20, // padding top
        flex: 1 // take up one column in flex 
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})

export default styles