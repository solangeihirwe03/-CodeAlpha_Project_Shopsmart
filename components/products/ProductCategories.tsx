import { Image, ScrollView, StyleSheet, Text, View, Dimensions, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { categoryItems } from '@/lib/dataItems'

const { width } = Dimensions.get('window')
interface CategoryProps {
    id: string,
    image: any,
    title: string,
    style?: StyleProp<ViewStyle>
}

const ProductCategories: React.FC<CategoryProps> = ({ id, image, title, style }) => {
    return (
        <View>
            <View style={styles.card}>
                <Image
                    source={image}
                    style={styles.image}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default ProductCategories

const styles = StyleSheet.create({
    image:{
        width: 115,
        height: 150
    }, 
    card:{
        marginBottom: 30
    },
    title:{
        fontSize: 20,
        marginTop: 8,
        textAlign: "center"
    }
})