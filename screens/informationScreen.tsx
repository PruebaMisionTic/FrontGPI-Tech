import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function InformationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información</Text>
      <Text>G.P.I-Tech</Text>
      <Text>Programación web</Text>
      <Text>MisiónTIC 2022 Ciclo 4</Text>
      <Text>GRUPO CONFORMADO</Text>
      <Text>Wolfang Jesus Vera Mendoza </Text>
      <Text>Santiago Hewitt Ramirez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
