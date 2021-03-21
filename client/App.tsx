import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');

  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  useEffect(() => {
    callApi()
    .then(res => setResponse(res.express))
    .catch(err => console.log(err));
  });
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: post }),
    });
    const body = await response.text();
    
    setResponseToPost(body);
  };


  return (
    <View style={styles.container}>
      <Card />
      <Card />
      <StatusBar style="auto" />

      <View>{response}</View>
        <Text>
          Post to Server:
        </Text>
        <TextInput
          value={post}
          onChangeText={setPost}
        />
        <Button onPress={handleSubmit} title='submit'>Submit</Button>
       <p style={{color : 'blue'}}><b>{responseToPost}</b></p>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
  },
});
