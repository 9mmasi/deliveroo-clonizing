
import React from 'react'
import {  StyleSheet,SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View >
      <CustomHeader />
      <SearchBar />
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


