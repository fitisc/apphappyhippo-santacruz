import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
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
        height: 180,
    },
    headerContainer: {
        flex: 1,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
    },
    containerDetails: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
    },
    details: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailQty: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
        color: colors.text,
    },
    detail: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
        color: colors.text,
    },
    detailPrice: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "OpenSans-Bold",
        color: colors.text,
        marginLeft: 10,
    },

   
});