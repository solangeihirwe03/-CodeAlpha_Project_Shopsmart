import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { allItems } from '@/lib/dataItems'
import Icon from 'react-native-vector-icons/Ionicons'
import { Link } from 'expo-router'

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allItems);
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleSearch = (text: string) => {
    setSearchText(text);

    filterProducts(text, selectedCategory)
  }

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    filterProducts(searchText, category)
  }

  const filterProducts = (text: string, category: string) => {
    const filtered = allItems.filter(item => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(text.toLowerCase())

      return matchesCategory && matchesSearch
    });
    setFilteredProducts(filtered)
  }

  const truncateWord = (word: string, length = 10)=>{
    return word.length > length ? `${word.substring(0,length)}...` : word
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder='Search...'
            value={searchText}
            onChangeText={handleSearch}
            underlineColorAndroid="transparent"
          />
        </View>
        <Icon name="options-outline" size={30} color="black" />
        <View style={styles.cartStyles}>
          <Text style={[styles.par, styles.cartColorText]}>$123</Text>
          <Link href="/(tabs)/cart">
            <Icon
              name='cart-outline'
              size={35}
              style={styles.icon}
            /></Link>
        </View>
      </View>

      <ScrollView
        horizontal
        style={styles.scrollView}
      >
        <View style={styles.buttonContainer}>
          {['All', 'men', 'women', 'babies', 'electronics'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton
              ]}
              onPress={() => handleCategorySelection(category)}
            >
              <Text style={[styles.text,
              selectedCategory === category && styles.textSelected
              ]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.icons}>
              <Icon name="cart-outline" size={25} color="#01AFF6" style={styles.iconStyle} />
              <Icon name='heart-outline' size={25} color="#01AFF6" style={styles.iconStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.texts}>{truncateWord(item.name)}</Text>
              <Text style={styles.texts}>${item.price}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        style={styles.flatlistContainer}
      />
      {filteredProducts.length === 0 && (
        <Text style={styles.noResultsText}>No products found</Text>
      )}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    gap: 5,
    backgroundColor: "#d9d9d9",
    width: 240,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 25,

  },
  searchInput: {
    borderColor: '#ccc',
    borderWidth: 0,
    borderRadius: 8,
    paddingLeft: 10,
    height: 40,
    fontSize: 20
  },
  scrollView: {
    paddingBottom:80,
    height: 90
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  categoryButton: {
    paddingVertical: 20,
    textAlign: "center",
    paddingHorizontal: 40,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    height:40
  },
  selectedCategoryButton: {
    backgroundColor: '#01AFF6'
  },
  text: {
    fontSize: 20,
    fontWeight: "500"
  },
  textSelected: {
    color: "white"
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
  cartStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  par: {
    fontSize: 20
  },
  icon: {
    paddingRight: 10
  },
  cartColorText: {
    color: "#01AFF6",
    fontWeight: 500
  },
  flatlistContainer: {
    marginTop: 0,
    display: "flex",
    marginHorizontal: 5
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    marginRight: 15,
    marginBottom: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 1
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  image: {
    width: 128,
    height: 145
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingTop: 15
  },
  iconStyle: {
    width: 35,
    height: 35,
    borderRadius: 40,
    borderWidth: 1,
    marginRight: 5,
    textAlign: "center",
    paddingTop: 3,
    borderColor: "#01AFF6"
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginLeft: -18
  },
  texts: {
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 8
  }
})