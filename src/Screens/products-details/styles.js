import { StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
       
    },
    detail: {
        height: height / 2,
        width: width / 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: "OpenSans-Bold",
        color: "#534646",
        
    },
}); 