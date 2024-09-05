import { Dimensions, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { item } from '@/lib/dataItems'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window')

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollViewRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % item.length;
      scrollViewRef.current!.scrollTo({ x: nextIndex * width, animated: true })
      setCurrentIndex(nextIndex)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentIndex, item.length])

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / width)
    setCurrentIndex(index)
  }

  return (
    <View>
      <View>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.cardLayout}>
            {item.map((i, index) => (
              <View key={index} style={styles.cardContainer}>
                <Image
                  source={i.image}
                  style={styles.image}
                  resizeMode='cover'
                />
                <View style={styles.text}>
                  <Text style={styles.par}>{i.description}</Text>
                  <View style={styles.explore}>
                    <Text style={styles.par}>Explore deals</Text>
                    <Icon name='angle-double-right' size={30} color={"white"} />
                  </View>
                </View>

              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.dotContainer}>
          {item.map((_, index) => (
            <View
              key={index}
              style={
                [styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]
              }></View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  cardLayout: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 3
  },
  cardContainer: {
    minWidth: width,
    position: "relative",
    marginLeft: 20
  },
  image: {
    width: width,
    height: 158
  },
  text: {
    position: "absolute",
    left: 20,
    top: 55,
    color: "white",
    fontSize: 24,
    width: 300,
  },
  par: {
    color: "white",
    fontSize: 20
  },
  explore: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -20
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: { backgroundColor: '#E0D428' },
  inactiveDot: { backgroundColor: 'white' },
})