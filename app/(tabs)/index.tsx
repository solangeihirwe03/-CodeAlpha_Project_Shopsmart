import { Dimensions, StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { item, productItems, categoryItems, sellerItems } from '@/lib/dataItems'
import Icon from 'react-native-vector-icons/FontAwesome'
import Products from '@/components/products/Products'
import ProductCategories from '@/components/products/ProductCategories';
import Seller from '@/components/products/Sellers';
import { useNavigation } from '@react-navigation/native'
import { Link } from 'expo-router'

const width = Dimensions.get('window').width

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const navigation = useNavigation();

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
    <ScrollView>
      <View style={styles.headerContainer}>
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
      <View style={styles.featured}>
        <Text style={styles.blackText}>Featured products</Text>
        <Link href="/modals\featuredProducts">
          <View style={styles.view}>
            <Text style={styles.blackText}>view all</Text>
            <Icon name='angle-right' color={"black"} size={30} />
          </View>
        </Link>
      </View>
      <ScrollView horizontal style={styles.productContainer}>
        {productItems.map((product) => (
          <Products
            id={product.id}
            image={product.image}
            price={product.price}
            productName={product.productName}
          />
        ))}
      </ScrollView>
      <View style={styles.featured}>
        <Text style={styles.blackText}>Top categories</Text>
        <View style={styles.view}>
          <Text style={styles.blackText}>view all</Text>
          <Icon name='angle-right' color={"black"} size={30} />
        </View>
      </View>
      <View style={styles.categoryContainer}>
        {categoryItems.map((category) => (
          <ProductCategories
            id={category.id}
            image={category.image}
            title={category.title}
            style={styles.card}
          />
        ))}
      </View>
      <View style={styles.seller}>
        <Text style={styles.blackText}>Best Seller</Text>
        <View style={styles.view}>
          <Text style={styles.blackText}>view all</Text>
          <Icon name='angle-right' color={"black"} size={30} />
        </View>
      </View>
      <View>
        {sellerItems.map((item) => (
          <Seller
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative"
  },
  cardLayout: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width * 3,
    marginTop: 40
  },
  cardContainer: {
    minWidth: width,
    position: "relative",
    marginLeft: 20,
    height: 200
  },
  image: {
    width: width,
    height: 150,
    borderRadius: 22
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
    marginTop: -68,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#E0D428'
  },
  inactiveDot: {
    backgroundColor: 'white'
  },
  featured: {
    marginLeft: 10,
    marginTop: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  blackText: {
    fontSize: 20
  },
  view: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginRight: 10,
    alignItems: "center"
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 10
  },
  card: {
    width: width / 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100
  },
  seller: {
    marginLeft: 10,
    marginBottom: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
})