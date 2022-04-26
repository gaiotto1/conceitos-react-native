import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkil}
      {...rest}  
    >
        <Text style={styles.textSkill}>
          {skill}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkil: {
    marginBottom: 15,
    backgroundColor: '#1F1E25',
    paddingVertical: 14,
    borderRadius: 50,
  },
  textSkill: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }
});