import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: "OpenSans-Regular",
        marginBottom: 5,
    },
    message: {
        marginVertical: 0
    },
    helperText: {
        fontFamily: "OpenSans-Bold",
        fontSize: 12,
        color: colors.error,
    },
})