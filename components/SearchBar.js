import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


const SearchBar = () => {
  return (
    <View style={styles.SearchBarContainer}>
        <View style={styles.searchSection}>
            <View style={styles.inputContainer}>
                <Ionicons name='ios-search' size={24} color={"#00CCBC"} />
                <TextInput placeholder='Gloceries and Restaraunts' style={styles.input}/>
            </View>
            
                <TouchableOpacity style={styles.optionButton}>
                <Ionicons name='options-outline' size={24} color={"#00CCBC"}/>
                </TouchableOpacity>
            
            
     </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    SearchBarContainer:{
        height:60,
        backgroundColor:'#fff'
        
        
    },
    searchSection:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:20,
        gap:10,
        alignItems:'center',
        

    },
    inputContainer:{
        flex:1,
        borderRadius:8,
        backgroundColor:'#edf6f9',
        flexDirection:'row',
        alignItems:'center',
        
        
      
    },
    optionButton:{
        padding:10,
        borderRadius:50
    },
    input:{
        padding:10
    }

})