import React, { useState }from 'react';
import { View, Image, Text, Alert, Button, StyleSheet } from 'react-native';
import { colors } from "../../constants/themes/colors";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 20,
        color: colors.primary,
    },
});

const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState("");
    const [permission, setPermission] = useState(null);
    const [image, setImage] = useState(null);
    


    const verifyPermissions = async () => {
        const { status } = await ImagePicker. requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes!',
                'Necesitas permisos para usar la cámara.',
                [{ text: 'Okay' }]
            )
            return false;
        }
            return true;
        }

    const handleTakeImage = async () => {
        const isCameraPermissionGranted = await verifyPermissions();

        if(!isCameraPermissionGranted) return
    
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8,
        });

        setPickedUrl(image.uri);
        onImage(image.uri);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.preview}>   
                {!pickedUrl ? (
                    <Text style={Styles.text}>No hay imagen seleccionada</Text> )
                     : 
                    ( <Image source={{uri: pickedUrl}} style={Styles.image}></Image> )} 

            </View>
            <Button 
            title='Tomar foto'
            color={colors.primary} 
            onPress={handleTakeImage}
             />
        </View>
    );
}

export default ImageSelector;


