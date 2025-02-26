import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
