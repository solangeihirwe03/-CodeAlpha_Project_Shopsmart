import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomButton
      title= "Sign In"
      handlePress={()=>{}}
      containerStyles={styles.container}
      /> */}
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.96)'
  },
  containerStyles:{

  }
})