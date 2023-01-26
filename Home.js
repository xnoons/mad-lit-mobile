import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}><Text>card</Text></View>
      <View style={styles.card}><Text>card</Text></View>
      <View style={styles.card}><Text>card</Text></View>
      <View style={styles.card}><Text>card</Text></View>
      <Feather name="menu" size={24} color="black" />
      <Text>testing</Text>
      <Text>HOE</Text>
    </View>
  )
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 100,
    width: 350,
    margin: 5,
    backgroundColor: '#dceff0'
  }
});
