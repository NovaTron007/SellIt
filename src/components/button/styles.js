import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors"; // custom colors

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: colors.blue,
        borderRadius: 6,
        paddingVertical: 20,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center"
    }

})

export default styles