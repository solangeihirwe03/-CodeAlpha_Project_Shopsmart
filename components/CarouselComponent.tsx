import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'

const {width: viewportWidth} = Dimensions.get('window')

const SLIDER_WIDTH = viewportWidth;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function CarouselComponent({data}) {
    const renderItem =({item})=>{
        <View>
            <Image source={item.image} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    }
  return (
    <View>
        <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        />
    </View>
  )
}