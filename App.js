import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import MadLitDescription from './MadLitDescription';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const Root = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="MadLitDescription" component={MadLitDescription} />
      </Drawer.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MadLitDescription" component={MadLitDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
