import { StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#e0d0d0',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        margin: 50,
      
       
    },
    detail: {
        flex: 1,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: "OpenSans-Bold",
        color: "#534646",
        
    },
    image: {
        width: width / 2,
        height: height / 2,
        borderRadius: 10,
        margin: 10,
    },
}); 