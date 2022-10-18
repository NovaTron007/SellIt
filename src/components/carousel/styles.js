import { StyleSheet, Dimensions } from "react-native"
import { colors } from "../../utils/colors";

// destructure device height, width from window
const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
    image: {
        height: height * 0.45,
        width: width
    },
    paginateButtonContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 40,
        marginBottom: 10,
        alignItems: "center",
        alignSelf: "center"
    },
    paginateButton: {
        height: 4,
        width: 20,
        borderRadius: 6,
        backgroundColor: colors.lightGrey,
        margin: 5
    },
    activeButton: {
        height: 4,
        width: 30,
        borderRadius: 6,
        backgroundColor: colors.black
    }
})

export default styles;