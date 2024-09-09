import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StyleProp, ViewStyle } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { productItems } from '@/lib/dataItems'

interface productProps {
  id: string,
  image: any,
  price: number,
  productName: string;
  style: StyleProp<ViewStyle>
}


const Products: React.FC<productProps> = ({ id, image, price, productName, style }) => {

  return (
    <View >
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.featured}
        >
        <View style={style}>
          <Image
            source={image}
            style={styles.image}
            resizeMode='contain'
          />
          <View style={[styles.textContainer, style]}>
            <Text style={styles.text}>{productName}</Text>
            <Text style={styles.text}>${price}</Text>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Products

const styles = StyleSheet.create({
  featured:{
    display: "flex",
    flexDirection: "row",
    paddingRight: 20
  },
  image:{
    width: 150,
    height: 200
  },
   textContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
   },
   text:{
    fontSize: 20,
   }
})