import React from "react";
import {Dimensions, ScrollView} from 'react-native';
import styles from "./style";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Page3 from "../Page3";

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
         <Page3 />
         <Page1 />
         <Page2 />
      </ScrollView>
      
   );
};
   
export default PageList;