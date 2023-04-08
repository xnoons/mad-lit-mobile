import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Playing = ({ route, navigation }) => {
  const [inputValues, setInputValues] = useState([]);
  const [partsOfSpeech, setPartsOfSpeech] = useState([])

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
    console.log(inputValues);
  };

  const handleInputChange = (index, value) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
    <View>
      <Text>BING BONG</Text>
      <Text>{route.params.story}</Text>
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