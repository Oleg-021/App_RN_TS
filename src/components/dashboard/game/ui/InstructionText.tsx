import React from "react";
import {StyleSheet, Text} from "react-native";

import {Colors} from "../../../../util/constants/Colors";

interface IInstructionText {
    children: string,
    style?: object
}

const InstructionText: React.FC<IInstructionText> = ({children, style}) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.game.yellow,
        fontSize: 24
    },
});

export default InstructionText;