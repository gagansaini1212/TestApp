import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigation from './screens';

const AppInner = () => {
  return <Navigation />;
};

export default function App() {
  return (
    <View style={styles.container}>
      <AppInner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
