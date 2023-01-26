import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.card}><Text>card</Text></View>
      <View style ={styles.card}><Text>card</Text></View>
      <View style ={styles.card}><Text>card</Text></View>
      <View style ={styles.card}><Text>card</Text></View>

      <Text>testing</Text>
      <Text>HOE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card : {
    height: 100,
    width: 350,
    margin: 5,
    backgroundColor: '#dceff0'
  }
});
