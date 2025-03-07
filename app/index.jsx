import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import Task from '../components/Task';

export default function HomeScreen() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  return (
   <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return <Task key={index} text={item} />
          })
        }
      </View>
    </View>

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(task)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
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
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  }
});
