import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';


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
        <Text style={styles.appTitle}>우리두리</Text>
        <Text style={styles.textTitle}>버튼을 누르고 녹음을 시작해주세요!</Text>
      {getButton(0)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ffe700",
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#ffe700',
  },
  textTitle:{
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
  },
});

export default App;