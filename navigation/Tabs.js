import * as React from 'react'
import { Text, View } from 'react-native'

import styles from '../constants/styles'

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabs</Text>
    </View>
  );
}