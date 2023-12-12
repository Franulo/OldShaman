import React from 'react';
import { View, Text, Image } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import { Buffer } from "buffer";
import { convert } from "base64-to-tensor";
import * as FileSystem from 'expo-file-system';


import styles from './styles';

const model = async function (inputImage) {
   console.warn('loading model');

   const modelJson = await require('../../assets/model/model.json');
   const modelWeight = await require('../../assets/model/group1-shard.bin');
 
   await tf.ready();
 
   const lovefinder = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

   //console.warn(inputImage.uri)

   const height = inputImage.height;
   const width = inputImage.width;

   const file = await FileSystem.readAsStringAsync(inputImage.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

   console.log('Read image preview:', file.slice(0, 100));
   console.log('Read image size:', file.length);

   const imageBuffer = tf.util.encodeString(file, 'base64').buffer;
   console.log('Buffer size:', imageBuffer.byteLength);
   console.log('Bytes preview:', Array.from(new Uint8Array(imageBuffer)).slice(0, 20));

   const bytes = new Uint8Array(imageBuffer);
   console.log('Bytes preview:', bytes.slice(0, 50));

   const imageTensor = tf.tensor(bytes, [height, width, 3]);
 
   return inputImage;
 };
 
 export default model;