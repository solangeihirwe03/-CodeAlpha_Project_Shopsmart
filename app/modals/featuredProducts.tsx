import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Link } from 'expo-router'
import HeaderWithCart from '@/components/HeaderWithCart'
import { productItems } from '@/lib/dataItems'
import Products from '@/components/products/Products'

const { width } = Dimensions.get("window")

const featuredProducts = () => {
    return (
        <View style={styles.container}>
            <HeaderWithCart
                backLink="/(tabs)/"
                title='Featured Products'
                onCartPress={() => { }}
                style={styles.header}
            />
            <ScrollView >
                <View style={styles.featuredProduct}>
                    {productItems.map((item) => (
                        <View key={item.id} style={styles.cardItem}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <View style={styles.icon}>
                                <Icon name="cart-outline" size={25} color="#01AFF6" style={styles.iconStyle} />
                                <Icon name='heart-outline' size={25} color="#01AFF6" style={styles.iconStyle} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.productName}</Text>
                                <Text style={styles.text}>${item.price}</Text>
                            </View>

                        </View>
                    ))}
                    <View style={styles.cardItem}>
                        <Image
                            source={require("../../assets/images/T-shirt.png")}
                            style={styles.image}
                        />
                        <View style={styles.icon}>
                            <Icon name="cart-outline" size={25} color="#01AFF6" style={styles.iconStyle} />
                            <Icon name='heart-outline' size={25} color="#01AFF6" style={styles.iconStyle} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>T-shirt</Text>
                            <Text style={styles.text}>$10.0</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default featuredProducts

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: "auto"
    },
    extStyle: {
        justifyContent: "space-evenly"
    },
    featuredProduct: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: 10
    },
    cardItem: {
        backgroundColor: "white",
        padding: 25,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 8,
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
        height: 167
    },
    icon: {
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
        gap:5,
        marginLeft: -18
    },
    text:{
        fontSize: 20,
        fontWeight: "500",
        paddingTop: 8
    }
})