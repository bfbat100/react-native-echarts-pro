import React from "react";
import { View,TouchableOpacity } from "react-native";
import styles from "../../style";

export default function Container(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={[styles.container, { width: props.width }]} onPress={props.containerPress || null}>
      {props.children}
    </TouchableOpacity>
  );
}
