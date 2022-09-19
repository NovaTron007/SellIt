import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
        marginBottom: 54,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
      width: 18,
      height: 17,
    },
    title: {
      fontSize: 26,
      fontWeight: "500",
      color: colors.blue,
      paddingHorizontal: 16
    }
})

export default styles