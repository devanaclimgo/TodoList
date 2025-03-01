import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = () => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  itemLeft: {

  },
  square: {},
  itemText: {},
  circular: {},
});

export default Task();
