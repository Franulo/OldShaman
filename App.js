import { StyleSheet, View } from 'react-native';
import PageList from './components/PageList'

export default function App() {
  return (
    <View style={styles.container}>
      <PageList />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

