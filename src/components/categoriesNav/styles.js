import { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    imageContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 12,
      padding: 8,
      marginHorizontal: 10,
      backgroundColor: colors.lightGrey,
      height: 54,
      width: 54,
    },
    title: { 
      color: colors.grey
    }
})

export default styles