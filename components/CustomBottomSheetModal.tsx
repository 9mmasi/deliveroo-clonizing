import { StyleSheet, Text, View } from 'react-native'
import React,{ useMemo, forwardRef }  from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export type Ref=BottomSheetModal;

const CustomBottomSheetModal = forwardRef<Ref>((props,ref) => {
    const snapPoints=useMemo(()=>['50%'],[])
  return (
    <BottomSheetModal snapPoints={snapPoints} ref={ref}>
         <View>
      <Text>CustomBottomSheetModal</Text>
    </View>
    </BottomSheetModal>
   
  )
})

export default CustomBottomSheetModal

const styles = StyleSheet.create({})