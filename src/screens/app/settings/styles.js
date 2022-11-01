import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    // push button to bottom: allow flex 1
    safe: {
        flex: 1
    },
    container: {
        marginHorizontal: 24
    },
    infoContainer: {
        marginBottom: 8
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.textGrey,
        marginBottom: 12,
        lineHeight: 28
    },
    email: {
        fontSize: 14,
        fontWeight: "400",
        color: colors.textGrey,
        marginBottom: 12,
        lineHeight: 15,
    },
    editHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        width: 24,
        height: 24,
        marginBottom: 8
    }
})

export default styles