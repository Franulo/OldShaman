import React from 'react';
import { View, Text, Image } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import { Buffer } from "buffer";
import { convert } from "base64-to-tensor";


import styles from './styles';

const model = async function (inputImage) {
   console.warn('loading model');

   const modelJson = await require('../../assets/model/model.json');
   const modelWeight = await require('../../assets/model/group1-shard.bin');
 
   await tf.ready();
 
   const lovefinder = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeight));

   const height = inputImage.height;
   const width = inputImage.width;
   const base64 = inputImage.base64;
   const bytes = Buffer.from(base64, "base64")
   const imageTensor = tf.tensor(bytes);
   console.warn(imageTensor[0]);
   console.warn(height, width)
 
   return inputImage;
 };
 
 export default model;