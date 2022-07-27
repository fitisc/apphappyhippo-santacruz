import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        height: 180,
    },
    cartList: {
        flex: 1,
    },
    footer: {
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        paddingVertical: 10,
    },
    buttonConfirm: {
        backgroundColor: "#00a680",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
    },
    containerTotal: {
        flex: 1,
        alignItems: "center",
    },
    totalTitle: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
        color: colors.text,
    },
    total: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
        color: colors.text,
        marginLeft: 10,
    },


});