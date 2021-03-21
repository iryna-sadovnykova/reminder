import React from 'react';
import { CheckBox, StyleSheet, Text, View } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <CheckBox style={styles.checkbox}></CheckBox>
            <Text>Open up App.tsx</Text>
        </View>
        <View style={styles.footer}>
          <Text>31.01.1990</Text>
          <Text>Active</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '10px',
    width: '100%',
    height: '100px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkbox: {
    marginRight: '10px',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    right: '10px',
    justifyContent: 'space-between',
    flex: 1,
  }
});
