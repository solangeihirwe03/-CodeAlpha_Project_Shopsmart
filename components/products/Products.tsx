import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'

interface productProps {
  id: string,
  image: any,
  price: number,
  productName: string
}

const { width } = Dimensions.get("window")

const Products: React.FC<productProps> = ({ id, image, price, productName }) => {

  return (
    <View >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View >
          <Image
            source={image}
          />
          <View>
            <Text>{productName}</Text>
            <Text>{price}</Text>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}

export default Products

const styles = StyleSheet.create({

})