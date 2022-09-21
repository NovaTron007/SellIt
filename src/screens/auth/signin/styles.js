import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    agreeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    agreeText: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat",
        fontWeight: "500",
        marginHorizontal: 13,
        color: colors.blue
    },
    agreeTextInner: {
        fontWeight: "700"
    },
    button: {
        marginVertical: 20
    },
    footerText: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.blue,
        textAlign: "center",
        marginBottom: 50
    },
    footerLink: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.blue
    }
})

export default styles