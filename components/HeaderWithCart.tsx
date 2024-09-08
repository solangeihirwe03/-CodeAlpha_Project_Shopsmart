import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, LinkProps } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

interface HeaderWithCartProps {
    title: string;
    backLink: any;
    onCartPress: () => void
}

const { width } = Dimensions.get("window")

const HeaderWithCart: React.FC<HeaderWithCartProps> = ({ title, backLink, onCartPress }) => {
    return (
        <View style={styles.headerWithCart}>
            <View style={styles.title}>
                <Link href={backLink}>
                    <Icon
                        name="angle-left"
                        size={35}
                        style={styles.icon}
                    />
                </Link>
                <Text style={styles.par}>{title}</Text>
            </View>
            <View style={styles.cartStyles}>
                <Text style={[styles.par, styles.cartColorText]}>$123</Text>
                <Link href="/(tabs)/cart">
                    <Icon
                        name='shopping-cart'
                        size={35}
                        style={styles.icon}
                    /></Link>
            </View>
        </View>
    )
}

export default HeaderWithCart

const styles = StyleSheet.create({
    headerWithCart: {
        backgroundColor: "white",
        height: 80,
        width: width,
        elevation: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    par: {
        fontSize: 20
    },
    icon: {
        padding: 10
    },
    cartColorText: {
        color: "#01AFF6",
        fontWeight: 500
    },
    cartStyles: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
})