import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginVertical: 24
    },
    image: {
      width: 24,
      height: 24,
    },
    title: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.black,
      paddingHorizontal: 16
    },
    space: {
        width: 24,
        height: 24
    },
    searchContainer: {
      paddingHorizontal: 24
    }
})

export default styles