import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import styles from "./styles";
import model from "./Model";

const CameraPage = () => {
   let cameraRef = useRef();
   const [hasCameraPermission, setHasCameraPermission] = useState();
   const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
   const [photo, setPhoto] = useState();
 
   useEffect(() => {
     (async () => {
       const cameraPermission = await Camera.requestCameraPermissionsAsync();
       const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
       setHasCameraPermission(cameraPermission.status === "granted");
       setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
     })();
   }, []);
 
   if (hasCameraPermission === undefined) {
     return <Text>Requesting permissions...</Text>
   } else if (!hasCameraPermission) {
     return <Text>Permission for camera not granted. Please change this in settings.</Text>
   }
 
   let takePic = async () => {
     let options = {
       quality: 1,
       base64: true,
     };
 
     let newPhoto = await cameraRef.current.takePictureAsync(options);
     setPhoto(newPhoto);
   };
 
   if (photo) {
      let analysePic = async () => {
         try {
           await model(photo);
         } catch (error) {
           console.error('Error during analysis:', error);
         }
       };

     let sharePic = () => {
       shareAsync(photo.uri).then(() => {
         setPhoto(undefined);
       });
     };
 
     let savePhoto = () => {
       MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
         setPhoto(undefined);
       });
     };
 
     return (
       <SafeAreaView style={styles.container}>
         <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
         <Button title='Analyse' onPress={analysePic}/>
         <Button title="Share" onPress={sharePic} />
         {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
         <Button title="Discard" onPress={() => setPhoto(undefined)} />
       </SafeAreaView>
     );
   }
 
   return (
     <Camera style={styles.container} ref={cameraRef}>
       <View style={styles.buttonContainer}>
         <Button title="Take Pic" onPress={takePic} />
       </View>
       <StatusBar style="auto" />
     </Camera>
   );
 }

 export default CameraPage;