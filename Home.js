import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home = (props) => {
  const [cardInfo, setCardInfo] = useState([
    {
      id: 1,
      username: 'firstPerson',
      story_title: 'One Fish Two Fish Red Fish Blue Fish',
      story: ['Cats', 'are', 'orange', 'and', 'awesome'],
      partsOfSpeech: ['noun', null, 'adjective', null, 'adjective']
    },
    {
      id: 2,
      username: 'secondPerson',
      story_title: 'Green Eggs and Ham',
      story: ['Cats', 'are', 'orange', 'and', 'awesome'],
      partsOfSpeech: ['noun', null, 'adjective', null, 'adjective']

    },
    {
      id: 3,
      username: 'thirdPerson',
      story_title: 'Awesome cat',
      story: ['Cats', 'are', 'orange', 'and', 'awesome'],
      partsOfSpeech: ['noun', null, 'adjective', null, 'adjective']
    }

  ])
  return (
    <View style={styles.container}>

      {cardInfo.map((info, i) => {
        const story = info.story.join(' ')
        return <Button style={styles.card} title={story} key={i} onPress={() => props.navigation.navigate('Playing', { story: info.story, partsOfSpeech: info.partsOfSpeech })}></Button>
      })}
      <Text>carsdfsdfdd</Text>
      <Button title="testing button" onPress={() => props.navigation.navigate('Playing')} />



      <Button title="testing button" onPress={() => props.navigation.navigate('MadLitDescription')} />
      <Button title="testing button setting" onPress={() => props.navigation.navigate('Settings')} />

      <Feather name="menu" size={24} color="black" />

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
