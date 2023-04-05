import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Playing = ({ route, navigation, ...propso}) => {
  return (
    <View>
      {console.log(propso)}
      <Text>BING BONG</Text>
      <Text>{route.params.story}</Text>
    </View>
  )
}
export default Playing;
