import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: colors.blue,
        marginBottom: 12,
        lineHeight: 28
    },
    uploadContainer:{
        borderRadius: 6,
        borderWidth:1,
        borderStyle: 'dashed',
        borderColor:colors.darkGrey,
        backgroundColor: colors.white,
        padding: 24,
        display: "flex",
        alignItems: "center"
    },
    uploadCircle: {
        display:"flex",
        borderRadius: 45,
        backgroundColor: colors.lightGrey,
        height: 80,
        width: 80,
        justifyContent: "center"
    },
    uploadPlus: {
        display: "flex",
        fontSize: 16,
        fontWeight: "300",
        color: colors.blue,
        alignSelf: "center",
    },
    imagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginVertical: 24
    },
    image: {
        width: 90,
        height: 90,
        marginRight: 8,
        marginVertical: 8,
        borderRadius: 10,
        position: "relative",
        zIndex: 1
    },
    closeIconContainer: {
        position: "absolute",
        zIndex: 1,
        zIndex: 10,
        right: 0,
        marginBottom: 40
    },
    closeIcon: {
        width: 24,
        height: 24
    },
    textAreaContainer: {
        minHeight: 150,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1
    },
    categoryInput: {
        paddingVertical: 4
    }
})

export default styles