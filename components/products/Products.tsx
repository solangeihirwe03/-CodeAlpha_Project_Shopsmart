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
  const [activeCard, setActiveCard] = useState(0)

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    const currentCard = Math.floor(scrollPosition / width)
    setActiveCard(currentCard)
  }
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
    >
      <View style={[styles.content, {width: width * 2}]}>
        <View >
          <Image
            source={image}
          />
          <View>
            <Text>{productName}</Text>
            <Text>{price}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Products

const styles = StyleSheet.create({
  scrollView:{
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: width
  },
  productContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row"
  },
  content: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
})