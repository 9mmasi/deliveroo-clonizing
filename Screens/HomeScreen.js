
import React from 'react'
import {  StyleSheet,SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View >
      <CustomHeader />
    </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  safeArea:{
    flex:1
  }
})


