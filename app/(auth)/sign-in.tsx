import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView } from 'react-native'
import CustomButton from '@/components/CustomButton'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { FIREBASE_AUTH } from '@/lib/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface FormState {
  email: string;
  password: string;
}

const index = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form, setform] = useState({
    email: "",
    password: ""
  })
  const auth = FIREBASE_AUTH;

  const handleChange = (field: keyof FormState, value: string) => {
    setform(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const tooglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handlePress = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "please fill in fields")
    }
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, form.email, form.password)
      console.log(response)
      router.replace("/home")
    }
    catch (error: any) {
      console.log(error)
      Alert.alert("Error", error.message)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              source={require("../../assets/images/signin.png")}
              style={styles.image}
              resizeMode='cover'
            />

            <View style={styles.signinLayout}>
              <Text style={styles.heading}>
                sign in to your account
              </Text>

              <Text style={styles.par}>
                welcome to our EZ ecommerce platform
              </Text>


              <KeyboardAvoidingView>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("../../assets/images/email.svg")}
                    style={styles.svg} />
                  <TextInput
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Your Email...'
                    placeholderTextColor="#888"
                    value={form.email}
                    onChangeText={(text) => handleChange("email", text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Image
                    source={require("../../assets/images/password.svg")}
                    style={styles.svg}
                  />
                  <TextInput
                    style={styles.input}
                    secureTextEntry={showPassword}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Your Password...'
                    placeholderTextColor="#888"
                    value={form.password}
                    onChangeText={(text) => handleChange("password", text)}
                  />
                  <TouchableOpacity onPress={tooglePassword}>
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={25}
                    />
                  </TouchableOpacity>

                </View></KeyboardAvoidingView>
              <Text style={styles.forgotp}>
                Forgot Password
              </Text>

              <CustomButton
                title="Sign In"
                handlePress={handlePress}
                containerStyles={styles.containerButton}
                textStyles={styles.text}
                isLoading={isLoading}
              />

              <View style={styles.signup}>
                <Text style={styles.member}>
                  Not a member?
                </Text>
                <Link href="/(auth)/Sign-up" style={styles.link}>Sign up</Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView >

  )
}

export default index

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8DA7B1"
  },
  signinLayout: {
    marginHorizontal: 10,
    paddingHorizontal: 0
  },
  heading: {
    fontWeight: "500",
    textTransform: "capitalize",
    fontSize: 30,
    textAlign: "center"
  },
  par: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 30
  },
  inputContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 80
  },
  svg: {
    width: 40,
    borderRightWidth: 2
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "white",
    fontSize: 20,
    borderWidth: 0,
    borderColor: 'white',
    shadowColor: 'transparent',
    elevation: 0,
    height: 52
  },
  containerButton: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80
  },
  forgotp: {
    textAlign: "right",
    marginTop: -15,
    marginBottom: 20,
    paddingRight: 25,
    fontSize: 20,

  },
  signup: {
    marginLeft: 10,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  member: {
    color: "white",
    fontSize: 20
  },
  link: {
    color: "white",
    fontSize: 20
  },
  text: {
    fontWeight: "600"
  },
  image:{
    width: 400, 
    height: 170, 
    marginBottom: 15
  }
})