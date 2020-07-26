import * as React from 'react'
import { Text, View } from 'react-native'

import styles from './StyleSheet'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabbox</Text>
    </View>
  );
}