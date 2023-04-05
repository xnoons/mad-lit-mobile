import { StyleSheet, Text, View, Button } from 'react-native';


const Settings = () => {
  return (
    <View>
      <Text> SETTINGS</Text>
    </View>
  )
}

export default Settings;


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