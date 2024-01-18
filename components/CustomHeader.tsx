import { StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import CustomBottomSheetModal from './CustomBottomSheetModal'
import { BottomSheetModal } from '@gorhom/bottom-sheet'


const CustomHeader = () => {
  const bottomsheetRef=useRef<BottomSheetModal>(null);
  const openModal=()=>{
    bottomsheetRef.current?.present();

  }
  return (
    <View style={styles.nav}>
    <CustomBottomSheetModal ref={bottomsheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
            <Image source={
                require("../assets/delivery.png")
            } style={styles.avatar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerText} >
          <Text style={styles.title}>Delivery . Now</Text>
          <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Dar es Salaam</Text>
          <Ionicons name='chevron-down-outline' size={24}  color={'#00CCBC'}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' color={'#00CCBC'} size={24}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  title:{
    fontSize:14,
    color:"#adb5bd"
  },
  subtitleContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  subtitle:{
    fontSize:18,
    fontWeight:'bold'
  },
container:{
  flexDirection:'row',
  height:60,
  justifyContent:'space-between',
  alignItems:'center',
  gap:10,
  flex:1,
  paddingHorizontal:20,
  backgroundColor:'#fff'
},
headerText:{
  flex:1
},
profileButton:{
  backgroundColor:"#edf6f9",
  padding:10,
  borderRadius:50
},
    nav:{
        flexDirection:"row"
    },
    avatar:{
      borderRadius:50,
      height:50,
      width:50
    }
})