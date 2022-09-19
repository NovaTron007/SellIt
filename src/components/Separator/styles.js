import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    line: {
        height: 1,
        flex: 1, // grow as big as can
        backgroundColor: colors.lightGrey
    },
    title: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.blue,
        marginHorizontal: 10
    }
})

export default styles