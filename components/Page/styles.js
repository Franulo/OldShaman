import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width,
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'black',
      fontSize: 12,
    },
});

export default styles;