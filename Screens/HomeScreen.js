
import React from 'react'
import {  StyleSheet,SafeAreaView, Platform, Dimensions, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  const marginValue = Platform.OS === 'ios' ? screenHeight * 0.05 : screenHeight * 0.05;
  return (
    <SafeAreaView style={[styles.safeArea,{ marginTop: marginValue }]}>
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


