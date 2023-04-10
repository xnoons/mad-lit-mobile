import React, { useState, createContext } from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home'
import Profile from './Profile'
import MadLitDescription from './MadLitDescription';
import Settings from './Settings';
import Playing from './Playing';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({})
  const [userLogin, setUserLogin] = useState(true)

  const AuthScreens = () => {
    const Root = () => {
      return (
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="MadLitDescription" component={MadLitDescription} />
          {userLogin && <Drawer.Screen name="Profile" component={Profile} />}
        </Drawer.Navigator>
      );
    }
    return (
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Playing" component={Playing} />
        <Stack.Screen name="MadLitDescription" component={MadLitDescription} />
        <Stack.Screen name="Settings" component={Settings} />

      </Stack.Navigator>
    )
  }


  const NonAuthScreens = () => {
    const Root = () => {
      return (
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="MadLitDescription" component={MadLitDescription} />
        </Drawer.Navigator>
      );
    }
    return (
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Playing" component={Playing} />
        <Stack.Screen name="MadLitDescription" component={MadLitDescription} />
        <Stack.Screen name="Settings" component={Settings} />

      </Stack.Navigator>
    )
  }

  const isLoggedIn = true;

  return (
    <UserContext.Provider value={{ userValue: [user, setUser], userLoginValue: [userLogin, setUserLogin] }}>
      <NavigationContainer>
        {isLoggedIn ? (
          <AuthScreens />
        ) : (
          <NonAuthScreens />
        )}
      </NavigationContainer>
    </UserContext.Provider>
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
