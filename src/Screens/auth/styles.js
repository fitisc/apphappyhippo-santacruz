import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 750,
        width: '80%',
        maxWidth: 800,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    label: {
        fontSize: 14,
        fontFamily: "OpenSans-Bold",
        marginVertical: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 35,
        textAlign: 'center',
    },
    imagecontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: '100%',
    },
  
    propmt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    propmtMessage: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        color: colors.text,
        marginRight: 15
    },
    propmtButton: {
        fontSize: 14,
        fontFamily: 'OpenSans-Bold',
        color: colors.primary,
        textAlign: 'center',
    }
});