import { StyleSheet, Text, View, Button } from 'react-native';


const Profile = () => {
  return (
    <View>
      <Text> Profile</Text>
    </View>
  )
}

export default Profile;


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