import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home = (props) => {
  const [cardInfo, setCardInfo] = useState([
    {
      id:1,
      username: 'firstPerson',
      story_title: 'One Fish Two Fish Red Fish Blue Fish',
      story:'One fish, Two fish, Red fish, Blue fish, Black fish, Blue fish, Old fish, New fish. This one has a little car. This one has a little star. Say! What a lot of fish there are. Yes. Some are red, and some are blue. Some are old and some are new. Some are sad, and some are glad, And some are very, very bad. Why are they sad and glad and bad? I do not know, go ask your dad. Some are thin, and some are fat. The fat one has a yellow hat.'
    },
    {
      id:2,
      username:'secondPerson',
      story_title: 'Green Eggs and Ham',
      story:'Do you like green eggs and ham? I do not like them, Sam-I-Am. I do not like green eggs and ham. Would you like them here or there? I would not like them here or there. I would not like them anywhere. I do not like green eggs and ham. I do not like them, Sam-I-Am. Would you like them in a house? Would you like them with a mouse? I do not like them in a house. I do not like them with a mouse. I do not like them here or there. I do not like them anywhere. I do not like green eggs and ham. I do not like them, Sam-I-Am.'
    },
    {
      id:3,
      username:'thirdPerson',
      story_title: 'Awesome cat',
      story: 'Cats are orange and awesome',
      partsOfSpeech:['noun',null,'adjective',null,'adjective']
    }

  ])
  return (
    <View style={styles.container}>
      
        {cardInfo.map((info,i)=>{
          return <Button style={styles.card} title={info.story} key={i} onPress={()=>props.navigation.navigate('Playing', {story: info.story, partsOfSpeech: info.partsOfSpeech})}></Button>
        })}
        <Text>carsdfsdfdd</Text>
        <Button title="testing button" onPress={()=>props.navigation.navigate('Playing')}/>
      
      

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
