import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { allItems, item } from '@/lib/dataItems'
import HeaderWithCart from '@/components/HeaderWithCart'
import Icon from 'react-native-vector-icons/Ionicons'

const wishlist = () => {
  const [wishlist, setWishlist] = useState<string[]>([])
  const [wishlistItem, setWishlistItem] = useState<any[]>([])

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist))
    }
  }, []);

  useEffect(() => {
    const items = allItems.filter(item => wishlist.includes(item.id));
    setWishlistItem(items);
  }, [wishlist]);

  const handleWishlistToggle = (itemId: string) => {
    setWishlist(prevWishlist => {
      const updatedWishList = prevWishlist.includes(itemId)
        ? prevWishlist.filter(id => id !== itemId)
        : [...prevWishlist, itemId];
  
      localStorage.setItem('wishlist', JSON.stringify(updatedWishList));

      return updatedWishList;
    });
  };

  const isInWishlist = (itemId: string) => wishlist.includes(itemId)

  return (
    <View style={{ flex: 1 }}>
      <HeaderWithCart
        backLink="/(tabs)/wishlist"
        title='Wishlist'
        onCartPress={() => { }}
        style={styles.header}
      />
      <FlatList
        data={wishlistItem}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.cardItem}>
              <View style={styles.addWish}>
                <Text style={styles.text}>{item.name}</Text>
                <TouchableOpacity onPress={()=> handleWishlistToggle (item.id)}>
                <Icon 
                name={isInWishlist(item.id) ? 'heart' : 'heart-outline'} 
                size={35} 
                color="#01AFF6" 
                style={styles.iconStyle} 
                />
              </TouchableOpacity>
              </View>
              <View style={styles.addCart}>
                <View>
                  <Text style={styles.text}>${item.price}</Text>
                  <Icon
                    name='cart-outline'
                    size={35}
                    color="#01AFF6"
                  />
                </View>
                <Text style={styles.plus}>+</Text>
              </View>

            </View>
          </View>
        )}
      />
      {wishlistItem.length === 0 && (
        <Text style={styles.noResultsText}>No items in wishlist</Text>
      )}
    </View>
  )
}

export default wishlist

const styles = StyleSheet.create({
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: "center"
  },
  header: {
    height: "auto"
  },
  textContainer: {
    display: "flex",
    gap: 5,
    marginLeft: 10
  },
  texts: {
    fontSize: 20,
    fontWeight: "500"
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
  cardItem: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    width: 250,
    borderColor: "#8DA7B1",
    marginBottom: 20
  },
  addWish: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  addCart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15
  },
  text: {
    fontSize: 20
  },
  plus: {
    fontSize: 35
  },
  image: {
    width: 100,
    height: 100
  },
  iconStyle: {
    marginRight: 5,
    textAlign: "center",
    paddingTop: 3,
    borderColor: "#01AFF6"
  }
})