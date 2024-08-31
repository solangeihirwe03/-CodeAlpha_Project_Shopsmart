import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Image,
  ImageBackground
} from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

interface CardData {
  id: number;
  title: string;
  description: string;
  src: any
}

const cardData: CardData[] = [
  {
    id: 1,
    title: 'DISCOVER OUR LATEST DEALS ',
    description: 'explore deals',
    src: require("../../assets/images/card1.png")
  },
  {
    id: 2,
    title: 'DISCOVER OUR AMAZING DISCOUNTS',
    description: 'explore deals',
    src: require("../../assets/images/card2.png")
  },
  {
    id: 3,
    title: 'EXPLORE OUR WIDE RANGE OF CATEGORIES',
    description: 'explore deals',
    src: require("../../assets/images/card3.png")
  }
];

const { width } = Dimensions.get('window')

export default function index() {
  const flatListRef = useRef<FlatList<CardData>>(null)
  const [cards, setCards] = useState(cardData.slice(0, 3))
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const [first, ...rest] = prevCards;
        return [...rest, cardData[(cardData.indexOf(rest[rest.length - 1]) + 1) % cardData.length]]
      });
    }, 2000);

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const renderItem: ListRenderItem<CardData> = ({ item }) => (
    <ImageBackground source={item.src} style={styles.card} imageStyle={styles.image}>
      <View >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
          <FontAwesome name="angles-right" size={30} color="#fff" />
        </View>
      </View>
    </ImageBackground>

  )

  const keyExtractor = (item: CardData) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ref={flatListRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    marginHorizontal: 30,
    padding: 30,
    width: width * 0.95,
    height: 170,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    overflow: 'hidden'
  },
  image: {
    borderRadius: 20,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    width: width *0.6,
    color: 'white',
    lineHeight: 24
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15
  },
  description: {
    color: 'white',
    fontSize: 21,
    paddingRight: 15,
    fontWeight: "200"
  },
})