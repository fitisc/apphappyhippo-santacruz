import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        height: 180,
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 10,
        shadowColor: colors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
    },
});