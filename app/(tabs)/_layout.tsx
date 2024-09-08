import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Icon from 'react-native-vector-icons/Ionicons';



const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#29B1E0",
                    tabBarInactiveTintColor: "#fff",
                    tabBarStyle: {
                        backgroundColor: "#64757B",
                        height: 70
                    }
                }}
            >
                <Tabs.Screen
                    name='index'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                                <Icon
                                    name='home'
                                    size={35}
                                    color={focused ? "#29B1E0" : "white"}
                                />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name='[query]'
                    options={{
                        title: "Search",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                                <Icon
                                    name='search'
                                    size={35}
                                    color={focused ? "#29B1E0" : "white"}
                                />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name='wishlist'
                    options={{
                        title: "wishlist",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                                <Icon
                                    name='heart'
                                    size={35}
                                    color={focused ? "#29B1E0" : "white"}
                                />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name='cart'
                    options={{
                        title: "Cart",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                                <Icon
                                    name='cart'
                                    size={35}
                                    color={focused ? "#29B1E0" : "white"}
                                />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <View style={[styles.iconContainer, focused && styles.focusedIconContainer]}>
                                <Icon
                                    name='person'
                                    size={35}
                                    color={focused ? "#29B1E0" : "white"}
                                />
                            </View>
                        )
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0
    },
    focusedIconContainer: {
        borderBottomWidth: 0
    }
})