import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const OutPut = ({route}) => {
  return (
    <SafeAreaView style={styles.head}>
      <View style={[styles.container,styles.padd]}>
        
        <Text style={styles.textStyle}>
          Здравствуйте, {route.params.paramKey} !
        </Text>
      </View>
      
    </SafeAreaView>
  );
};

export default OutPut;

const styles = StyleSheet.create({
  head: {
    flex: 1,
    backgroundColor:"#FDECEC",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor:"#FDECEC",
  },
  heading: {
    textAlign: 'center',
    marginVertical: 10,
  },
  padd: {
    bottom: -150,
    

  },
  textStyle: {
    textAlign: 'center',
    fontSize: 19,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
  