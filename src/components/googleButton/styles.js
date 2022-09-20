import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors"; // custom colors

const styles = StyleSheet.create({
    container: {
        width: "40%",
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        marginVertical: 24,
        paddingVertical: 20,
        paddingHorizontal: 8,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 30
    }

})

export default styles