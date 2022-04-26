import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    if (newSkill !== '') {
      setMySkills(oldState => [...oldState, newSkill]);
      setNewSkill('');
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good nigth')
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Julio</Text>
      <Text style={styles.grettings}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 20, marginBottom: 15 }]}>
        My Skilss
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  grettings: {
    color: '#FFF',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 14,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 15,
    borderRadius: 7,
  },
});