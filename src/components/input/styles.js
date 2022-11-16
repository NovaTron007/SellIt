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
    },
    categoryArrow: {
        transform:[{rotate: "90deg"}],
        width: 24,
        height: 24,
        marginHorizontal: 16
    },
    modal: {
        flex: 1, // take up whole height (col)
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: "80%"
    },
    modalTitle: {
        fontWeight: "700",
        fontSize: 16,
        marginBottom: 16
    },
    categoryTitle: {
        color: colors.blue,
        marginVertical: 8
    },
    selected: {
        fontWeight: "700"
    }
})

export default styles