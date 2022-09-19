import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        width: 22,
        height: 22
    },
    // checked container
    innerContainer: {
        backgroundColor: colors.grey,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 12,
        height: 9
    }
})

export default styles