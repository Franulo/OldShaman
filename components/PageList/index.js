import React from "react";
import {View, Text, FlatList, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import styles from "./style";
import Page1 from "../Page1";
import Page2 from "../Page2";

const PageList = () => {

   return (
      <ScrollView 
         horizontal={true} 
         snapToInterval={Dimensions.get('window').width} 
         snapToAlignment={"center"} 
         decelerationRate={0}
         style={styles.container}
      >
         <Page1 />
         <Page2 />
      </ScrollView>
      
   );
};
   
export default PageList;