import React from "react";
import {Dimensions, ScrollView} from 'react-native';
import styles from "./style";
import Page1 from "../Page1";
import Page from "../Page";
import CameraPage from "../CameraPage";

const PageList = () => {

   return (
      <ScrollView 
         horizontal={true} 
         snapToInterval={Dimensions.get('window').width} 
         snapToAlignment={"center"} 
         decelerationRate={0}
         style={styles.container}
         showsHorizontalScrollIndicator={false}
      >
         <CameraPage />
         <Page />
         
      </ScrollView>
      
   );
};
   
export default PageList;