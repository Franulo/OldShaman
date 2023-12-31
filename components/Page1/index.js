import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

const Page1 = () => {

const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
      return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Sadly, we need your permission to show the camera. :( </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
   return (
      <View style={styles.container}> 
         <Camera style={styles.camera} type={type}>

            <View style={styles.buttonContainer}>
               <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                  <Text style={styles.text}>Flip</Text>
               </TouchableOpacity>
            </View>
            
         </Camera>
      </View>
      
   );
};

export default Page1;