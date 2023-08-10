import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const navigation = useNavigation();

  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const handleLogin = async () => {
    console.log('i am working');

    try {
      const jsonValue = JSON.stringify(true);
      await AsyncStorage.setItem('isLoggedIn', jsonValue);
      navigation.navigate('Dashboard');
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="password"
          secureTextEntry={true}
        />
        <Button
          title="Submit"
          color="#000000"
          onPress={() => {
            if (username === 'Test' && password === '1234') {
              handleLogin();
            } else {
              Alert.alert('Login Failed');
            }
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  textStyled: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
