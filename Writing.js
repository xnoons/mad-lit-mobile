import React, { useState } from 'react';
import { Button, TextInput, View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, Pressable, Alert, Touchable } from 'react-native';

const Writing = () => {
  const [story, setStory] = useState('');
  const [storyArr, setStoryArr] = useState([]);
  const [partsOfSpeechArr, setPartsOfSpeechArr] = useState([])

  const [highlighted, setHighlighted] = useState([])
  const [position, setPosition] = useState(0)
  const [partOfSpeech, setPartOfSpeech] = useState('')

  const [modalVisible, setModalVisible] = useState(false)
  // shows either story or parts of speech
  const [showStory, setShowStory] = useState(true)
  const [showPartOfSpeech, setShowPartOfSpeech] = useState(false)
  // styling state
  const [height, setHeight] = useState(40);

  const handleContentSizeChange = (event) => {
    setHeight(event.nativeEvent.contentSize.height);
  };

  const toPartOfSpeech = () => {
    const arrStory = story
    const arr = arrStory.split(' ')
    
    const pos = []
    for (let i = 0; i < arr.length; i++) {
      pos.push(null)
    }
    setPartsOfSpeechArr(pos)
    setStoryArr(arr)
    setShowStory(false)
    setShowPartOfSpeech(true)
  }


  const submitModal = () => {
    console.log('submit')
    
    //highlights word if part of speech was selected
    if (highlighted.length === 0 && partOfSpeech !== '') {
      console.log('HELLO?')
      const num = []
      for (let i = 0; i < storyArr.length; i++) {
        num.push(i)
      }
      const highlightWord = num
      highlightWord.splice(position, 1, 'highlighted')
      setHighlighted(highlightWord)
    } else if (partOfSpeech !== ''){
      const highlightWord = [...highlighted]
      highlightWord.splice(position, 1, 'highlighted')
      setHighlighted(highlightWord)
    }

    //replaces null with part of speech
    const updatedArr = [...partsOfSpeechArr]
    updatedArr.splice(position, 1, partOfSpeech)
    setPartsOfSpeechArr(updatedArr)
  }
  return (
    <View>
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              setPartOfSpeech('')
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Noun') }}>
                  <Text style={styles.modalText}>Noun</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Pronoun') }}>
                  <Text style={styles.modalText}>Pronoun</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Verb') }}>
                  <Text style={styles.modalText}>Verb</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Adjective') }}>
                  <Text style={styles.modalText}>Adjective</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Adverb') }}>
                  <Text style={styles.modalText}>Adverb</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Preposition') }}>
                  <Text style={styles.modalText}>Preposition</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Conjunction') }}>
                  <Text style={styles.modalText}>Conjunction</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech('Interjection') }}>
                  <Text style={styles.modalText}>Interjection</Text>
                </TouchableOpacity>
                {/* TODO: make custom input for parts of speech */}
                <TouchableOpacity onPress={() => { setPartOfSpeech('FIX THIS') }}>
                  <Text style={styles.modalText}>Custom!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setPartOfSpeech(null) }}>
                  <Text style={styles.modalText}>None</Text>
                </TouchableOpacity>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { setModalVisible(!modalVisible), submitModal(), setPartOfSpeech(''), console.log('closed') }}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* {
            partsOfSpeechArr.map((pos) => {
              console.log(pos)


            })
          } */}
          {/* {
            highlighted.map((pos) => {
              console.log('hi')
              console.log(pos)


            })
          } */}
          {storyArr.map((word, i) => {
            if (highlighted[i] === 'highlighted') {
              return (
                <TouchableOpacity style={{ backgroundColor: 'yellow' }} onPress={() => { setModalVisible(true), setPosition(i) }} key={i}>
                  <Text>{word}</Text>
                </TouchableOpacity>
              )
            }else{
              return (
                <TouchableOpacity onPress={() => { setModalVisible(true), setPosition(i) }} key={i}>
                  <Text>{word}</Text>
                </TouchableOpacity>
              )
            }
          })}

          <Text>{story}</Text>
          <Button title="Edit Story" onPress={() => { setShowStory(true), setShowPartOfSpeech(false) }} />
        </View>
        : <View></View>}

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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