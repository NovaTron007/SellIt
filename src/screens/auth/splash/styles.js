import { StyleSheet } from "react-native"
import { colors } from "../../../utils/colors"

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    titleContainer: {
        marginVertical: 54
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontSize: 40,
        color: colors.black,
        fontWeight: "bold",
        textAlign: "center"
    },
    titleInner: {
        color: colors.orange,
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    footerText: {
        fontSize: 16,
        color: colors.blue,
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 30
    }

})

export default styles