import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
     
    },
    title: {
        color: colors.primary,
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Bold',
        marginTop: 20,
        marginBottom: 20,
    },
  
});