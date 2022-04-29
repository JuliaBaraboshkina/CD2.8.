import React, {useState} from 'react';
import { StyleSheet, Text, StatusBar,Image,View,Pressable,SafeAreaView,TextInput} from 'react-native';


function Input({ navigation }) {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView style={styles.head}>
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Введите ваше имя:
      </Text>
      {}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Введите значение'}
          style={styles.inputStyle}
        />
        {}
        <Pressable style={styles.button} onPress={() => navigation.navigate('Добро пожаловать',{paramKey: userName,})}>
          <Text style={styles.text}>Ввод</Text>
        </Pressable>
  </View>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor:"#FDECEC",
  },
    container: {
      flex: 1,
      alignItems: 'center',
      bottom:-150,
      backgroundColor:"#FDECEC",
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 19,
      marginVertical: 10,
      fontWeight: 'bold',
    },
    inputStyle: {
      width: '90%',
      height: 44,
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#fff',
    },
    button: {
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 40,
      backgroundColor: '#E98A88',
      bottom:-10,
      width:140,
      height: 44,
    },
    text: {
      fontSize: 19,
      lineHeight: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  
export default Input;