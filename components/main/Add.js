import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Platform, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';


export default function Add({ navigation }) {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const cameraStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                setHasCameraPermission(cameraStatus.status === 'granted');

                if (hasCameraPermission !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                } else {
                    alert('You already give us the permissions to access your camera');
                }

                const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
                setHasGalleryPermission(galleryStatus.status === 'granted');

            } else {
                console.log("You are in a web browser, so we can't access to the camera")
            }
        })()
    }, []);

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if (hasCameraPermission === null || hasGalleryPermission === false) {
        return <Text>Camera feature is not available in web browser </Text>;
    }
    if (hasCameraPermission === false || hasGalleryPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio}
                    type={type}
                    ratio={'1:1'} />
            </View>

            <Button
                title="Flip Image"
                onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                    );
                }}>
            </Button>
            <Button title="Take Picture" onPress={() => takePicture()} />
            <Button title="Pick Image From Gallery" onPress={() => pickImage()} />
            <Button title="Save" onPress={() => navigation.navigate('Save', { image })} />
            {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
        </View>

    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    }

})