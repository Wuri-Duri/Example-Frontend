import React, {useState, useEffect} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const App = () => {

    const [isSelect, setSelect] = useState([false, false, false]);
    
    const getButton = (id: number) => {
        return (
          <Pressable
            style={[
              styles.buttonContainer,
              {backgroundColor: isSelect[id] ? '#228b22' : '#fff'},
            ]}
            onPress={() => {
              setSelect([
                ...isSelect.slice(0, id),
                !isSelect[id],
                ...isSelect.slice(id + 1),
              ]);
            }}>
            <Text>눌러주세요!</Text>
          </Pressable>
        );
      };
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source ={require("./images/bgimage.jpeg")} style={styles.bgImage} >
        <Text style={styles.textBox}>하지만 그들은 한 가지 비밀을 공유하지는 않았답니다.
        {"\n"} 그 비밀은 바로 "백설공주가 마녀"라는 사실이죠.</Text>
        <Text style={styles.textTitle}>다음 문장을 말해줘! </Text> 
        <TouchableOpacity style = {styles.recordCircle}>
          <Text style={styles.recordButton}>
            <Icon name="record-circle-outline" size={60} color="#ff0000"/>
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex:1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ffe700",
  },
  /*appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#ffe700',
  },*/
  textBox: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '600',
    backgroundColor: '#fff',
    marginTop: 110,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  textTitle:{
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 15,
    fontWeight: 'bold',

  },
  /*
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
  },*/
  recordButton: {
    alignSelf: 'center',
  },
});

export default App;