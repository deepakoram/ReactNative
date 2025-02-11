/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={styles.text}>Parent</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'black',
    fontSize:30
  },
 
});

export default App;
