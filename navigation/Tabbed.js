import * as React from 'react'
import { Text, View } from 'react-native'

import styles from '../constants/styles'

export default function Tabbed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabbed</Text>
    </View>
  );
}