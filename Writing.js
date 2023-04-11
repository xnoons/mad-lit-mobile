import React, { useState } from 'react';
import { Button, TextInput, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Writing = () => {
  const [story, setStory] = useState('');
  const [storyArr, setStoryArr] = useState([]);

  const [showStory, setShowStory] = useState(true)
  const [showPartOfSpeech, setShowPartOfSpeech] = useState(false)

  const [height, setHeight] = useState(40);

  const handleContentSizeChange = (event) => {
    setHeight(event.nativeEvent.contentSize.height);
  };

  const toPartOfSpeech = () => {
    const arrStory = story
    const arr = arrStory.split(' ')
    console.log(arrStory)
    console.log(arr)

    setStoryArr(arr)
    console.log(storyArr)
    setShowStory(false)
    setShowPartOfSpeech(true)
  }
  return (
    <TouchableOpacity onPress={() => console.log('Card clicked')}>
      {showStory ?
        <View>
          <View style={styles.card}>
            <Text style={styles.heading}>Write story</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <TextInput
                style={[styles.input, { height }]}
                multiline={true}
                value={story}
                onChangeText={setStory}
                onContentSizeChange={handleContentSizeChange}
              />
            </ScrollView>
          </View>
          <Button title="Go to Part of Speech" onPress={toPartOfSpeech} />
        </View>
        : <View></View>}

      {showPartOfSpeech ? 
      <View>
        <Text>{story}</Text>
      </View> 
      : <View></View>}

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 500,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#dceff0',
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'bottom',
  },
});

export default Writing;