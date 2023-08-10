import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

export default function SinglePost({route}) {
  const {data} = route.params;

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 10}}>
          {data.title}
        </Text>
        <Text style={{fontSize: 16, paddingTop: 30}}>{data.body}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  wrapper: {
    backgroundColor: '#D8ECE8',
  },
});
