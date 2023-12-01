import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width,
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   buttonContainer: {
      backgroundColor: '#fff',
      alignSelf: 'flex-end'
   },
   preview: {
      alignSelf: 'stretch',
      flex: 1
   }
 });

export default styles;