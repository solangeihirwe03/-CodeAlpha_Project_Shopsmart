import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Link } from 'expo-router'
import HeaderWithCart from '@/components/HeaderWithCart'

const featuredProducts = () => {
    return (
        <HeaderWithCart
        backLink= "/(tabs)/"
        title='Featured Products'
        onCartPress={()=> {}}
        />
    )
}

export default featuredProducts

const styles = StyleSheet.create({})