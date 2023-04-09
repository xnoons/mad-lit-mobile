import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Playing = ({ route, navigation }) => {
  const [inputValues, setInputValues] = useState([]);
  const [partsOfSpeech, setPartsOfSpeech] = useState([])
  const [story, setStory] = useState("")
  const [showInputs, setShowInputs] = useState(true)
  const [showStory, setShowStory] = useState(false)

  const removeNulls = () => {
    const arr = []
    route.params.partsOfSpeech.forEach(pos => {
      if (pos !== null) {
        arr.push(pos)
      }
    })
    setPartsOfSpeech(arr)
  }
  useEffect(() => {
    removeNulls()
  }, [])

  const submitMadLit = () => {
    //places nulls back into inputValues 
    const storeInputs = inputValues
    for (let i = 0; i < route.params.partsOfSpeech.length; i++) {
      if (route.params.partsOfSpeech[i] === null) {
        storeInputs.splice(i, 0, null)
      }
    }
    //replaces original story's words with user inputs
    const newStory = [route.params.story]
    for (let i = 0; i < storeInputs.length; i++) {
      if (storeInputs[i] !== null) {
        newStory.splice(i, 1, storeInputs[i])
      }
    }
    const finalStory = newStory.join(" ")
    setStory(finalStory)
    setShowInputs(false)
    setShowStory(true)
  };

  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  const playAgain = () => {
    setInputValues([])
    setStory("")
    setShowInputs(true)
    setShowStory(false)
  }
  return (
    <View>
      {showInputs ?
        <View>
          <Text>BING BONG</Text>
          <Text>{route.params.story.join(" ")}</Text>
          {partsOfSpeech.map((pos, i) => {
            return (
              <View key={i}>
                <Text>{pos}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => handleInputChange(i, value)}
                />
              </View>
            );
          })}
          <Button title="Submit" onPress={submitMadLit} />
        </View> :
        <View></View>
      }

      {showStory ?
        <View>
          <Text>{route.params.story}</Text>
          <Text>{story}</Text>
          <Button title="Play Again?" onPress={playAgain} />
          <Button title="Save"  />
          <Button title="Like"/>

        </View> :
        <View>
        </View>
      }

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Playing;