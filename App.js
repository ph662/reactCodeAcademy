import React, { useState } from 'react';
import { Text, View, Alert, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');

  const createTwoButtonAlert = (msg) =>
  Alert.alert('Alert Title', msg, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
      }}>
      <InputWithLabel
        label="Email"
        placeholder="Type your email here"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Type your password here"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label="Confirm password"
        placeholder="Re-type your password here"
        onSubmitEditing={(e) => {
          confirmPasswordsMatch(e.nativeEvent.text, password, createTwoButtonAlert);
        }}
        secureTextEntry
      />
      <InputWithLabel
        label="Name"
        placeholder="Type your dog's name here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="Birthday"
        placeholder="Type your dog's date of birth here"
        value={birthday}
        onChangeText={setBirthday}
      />
      <InputWithLabel
        label="Breed"
        placeholder="Type your dog's breed here"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="Favorite toy"
        placeholder="Type your dog's favorite toy here"
        value={toy}
        onChangeText={setToy}
      />
    </ScrollView>
  );
}

function confirmPasswordsMatch(confirmationPassword, originalPassword, createTwoButtonAlert) {89
  if (confirmationPassword !== originalPassword) {
    createTwoButtonAlert('Passwords do not match, please try again.');
  }
}

const InputWithLabel = (props) => {
  return (
    <View style={{padding: 16}}>
      <Text style={{padding: 8, fontSize: 18}}>{props.label}</Text>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
        style={{padding: 8,fontSize: 16}}
      />
    </View>
  );
};
