import { StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle, ActivityIndicator } from 'react-native'
import React from 'react'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

type CustomButtonProps = {
    title: string;
    handlePress: () => void;
    containerStyles?: StyleProp<ViewStyle>;
    textStyles: StyleProp<TextStyle>;
    isLoading: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={[
                styles.customButton,
                containerStyles,
                { opacity: isLoading ? 0.6 : 1 }
            ]}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size={30} color="white" />)
                : (<Text
                    style={[styles.text, textStyles]}
                >
                    {title}
                </Text>)}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#01AFF6",
        paddingHorizontal: 32,
        paddingVertical: 12
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "600"
    }
})