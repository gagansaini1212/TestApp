import React, {useEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import {truncate} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

export default function Dashboard({navigation}) {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      const getUSerIsLoggedIn = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('isLoggedIn');
          const res = jsonValue != null ? JSON.parse(jsonValue) : false;
          console.log('res', res);

          if (!res) {
            navigation.navigate('Login');
          }
        } catch (e) {
          console.log('error reading user isLoggedIn', e);
        }
      };
      getUSerIsLoggedIn();
    }
  }, [isFocused, navigation]);

  const getAdvice = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      // console.log('res', res.data);
      setData(res.data);
    });
  };
  useEffect(() => {
    getAdvice();
  }, []);
  // console.log('data', data);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          {data.map(post => (
            <TouchableOpacity
              key={post.id}
              style={styles.postStyled}
              onPress={() => {
                navigation.navigate('SinglePost', {
                  data: post,
                });
              }}>
              <Text style={{fontSize: 16}}>{post.title}</Text>
              <Text>
                {truncate(`${post.body}`, {
                  length: 100,
                  separator: ' ',
                })}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  input: {
    width: 300,
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  textStyled: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
  },
  postStyled: {
    backgroundColor: '#808080',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
});
