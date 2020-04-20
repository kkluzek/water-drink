import {Animated, Text, View, StyleSheet} from "react-native";
import React from "react";

export default function ({water, maxWater, heightAnim}) {
    return (
        <View style={styles.potContainer}>
            <View style={styles.waterPot}>
                <Text style={styles.caption}>{`${water}ml/${maxWater}ml`}</Text>
                <Animated.View
                    style={{
                        height: heightAnim.interpolate({
                            inputRange: [0, maxWater],
                            outputRange: [0, 200]
                        }),
                        position: 'absolute',
                        bottom: 0,
                        width: 250,
                        backgroundColor: 'powderblue'
                    }}
                >
                </Animated.View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    waterPot: {
        borderRadius: 200,
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'powderblue',
        borderWidth: 5,
        marginTop: 10
    },
    caption: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        zIndex: 1
    },
    potContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
