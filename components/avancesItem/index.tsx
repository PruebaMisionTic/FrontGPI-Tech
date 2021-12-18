import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AvancesScreen from '../../screens/AvancesScreen';

interface avancesItemProps {
  avances: {
    id: string,
    descrip: string,
    ObserLider: string,
        users: string[]
        projects: string[]
  }
}

const AvancesItem = ({ avances }: avancesItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Home' )
  }

  const cleanTask = () => {
    //
  }
  
  return (
    <View>
      <Pressable onPress={onPress} style={styles.root}>
      <View style={styles.iconContainer}>
         <MaterialCommunityIcons name="file-outline" size={20} color="white" />   {/*se ve un icono */}
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{avances.descrip}</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.time}>{avances.ObserLider}</Text>
      </View> 

    
    </Pressable>
        </View>
    
  )

}

export default AvancesItem