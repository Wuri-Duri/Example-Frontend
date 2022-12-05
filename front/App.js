import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import axios from 'axios';

const App = () => {
  const [inputSentence, setData] = useState(
    '라푼젤은 피터팬과 함께라면 그곳이 어디든 따라가겠다고 했죠..',
  );

  const onClick = () => {
    axios
      .post('http://52.79.115.87:3000/fairytale/create/others', {
        bookIdx: 19,
        inputSentence: inputSentence,
      })
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./images/bgImage.jpg')}
        style={styles.bgImage}>
        <Text style={styles.textBox}>{inputSentence}</Text>
        <Text style={styles.textTitle}>다음 문장을 말해줘! </Text>
        <Button onPress={onClick} title="불러오기">
          불러오기
        </Button>
        <TouchableOpacity style={styles.recordCircle}>
          <Text style={styles.recordButton}>
            <Icon name="record-circle-outline" size={60} color="#ff0000" />
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: 600,
    height: 100,
    textAlign: 'center',
    fontSize: 23,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    marginTop: 110,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    fontFamily: 'Jalnan',
    letterSpacing: 1,
    paddingTop: 25,
    paddingRight: 20,
    paddingLeft: 20,
    overflow: 'hidden',
    borderRadius: 30,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 8,
    fontFamily: 'Jalnan',
  },
  recordButton: {
    alignSelf: 'center',
  },
  inputSentence: {
    width: 600,
    height: 100,
    textAlign: 'center',
    fontSize: 23,
    backgroundColor: '#fff',
    textAlignVertical: 'center',
    marginTop: 110,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
    fontFamily: 'Jalnan',
    letterSpacing: 1,
    paddingTop: 25,
    overflow: 'hidden',
    borderRadius: 30,
  },
});

export default App;
