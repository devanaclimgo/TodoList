import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Task from '../components/Task';

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      <View style={styles.items}>
        <Task text={'Task 1'} />
        <Task text={'Task 2'} />
      </View>
    </View>

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} />

        <TouchableOpacity>
          <View style={styles.addWrapper}></View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  }
});
