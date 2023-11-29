import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
   container: {
      width: Dimensions.get('window').width,
      height: '100%',
    },
   camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
});

export default styles;