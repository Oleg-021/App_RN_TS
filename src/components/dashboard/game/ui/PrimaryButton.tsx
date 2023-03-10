import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

import {Colors} from "../../../../constants/Colors";

interface IPrimaryButton {
    children: string | React.ReactElement,
    onPress: () => void
}

const PrimaryButton: React.FC<IPrimaryButton> = ({children, onPress}) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress}
                       style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]
                           : styles.buttonInnerContainer}
                       android_ripple={{color: Colors.game.dark}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: Colors.gray400,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: Colors.yellow200,
        textAlign: "center"
    },
    pressed: {
        opacity: 0.5
    }
});

export default PrimaryButton;
