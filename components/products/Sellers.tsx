import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

interface SellerProps {
    id: string,
    image: any,
    price: number,
    name: string
}

const Seller: React.FC<SellerProps> = ({ id, image, price, name }) => {
    return (
        <View>
            <View style={styles.itemsContainer}>
                <Image
                    source={image}
                    style={styles.image}
                />

                <View style={styles.cardItem}>
                    <View style={styles.addWish}>
                        <Text style={styles.text}>{name}</Text>
                        <Icon name='heart' size={30} color="#8DA7B1" />
                    </View>
                    <View style={styles.addCart}>
                        <View>
                            <Text style={styles.text}>${price}</Text>
                            <Icon name='cart' size={30} color="#8DA7B1" />
                        </View>
                        <Text style={styles.plus}>+</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Seller

const styles = StyleSheet.create({
    itemsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 40,
        paddingHorizontal: 10
    },
    image:{
        width: 100,
        height: 86
    },
    cardItem: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        width: 230,
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
    text:{
        fontSize:  20
    },
    plus:{
        fontSize: 30
    }
})