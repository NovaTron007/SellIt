import { StyleSheet, Dimensions } from "react-native"
import { colors } from "../../../utils/colors"

// destructure height from device
const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    container: {
        width: "100%",
        flex: 1
    },
    content: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginVertical: -40,
        backgroundColor: colors.white,
        paddingHorizontal: 24,
        minHeight: 300
    },
    image: {
        height: height * 0.45, // set 45% of device height
        width: "100%"
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        color: colors.black,
        marginTop: 40
    },
    price: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.black,
        marginVertical: 8
    },
    description: {
        fontSize: 14,
        fontWeight: "300",
        color: colors.textGrey,
        marginVertical: 8,
        lineHeight: 19
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 24
    },
    footerImageContainer: {
        backgroundColor: colors.borderColor,
        borderRadius: 8,
        padding: 20,
        marginRight: 8
    },
    footerImage: {
        width: 24,
        height: 24
    },
    backContainer: {
        position: "absolute",
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 10,
        margin: 24
    },
    backImage: {
        width: 20,
        height: 20
    }    
})

export default styles