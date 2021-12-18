import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import ProjectsScreen from '../../screens/ProjectsScreen';

interface inscripcionItemProps {
  inscripcion: {
    id: string,
    estadoIns: string
        users: string[]
        proyectos: []
  }
}

const inscripcionItem = ({ inscripcion }: inscripcionItemProps) => {
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
        <Text style={styles.time}>{inscripcion.proyectos}</Text>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{inscripcion.estadoIns}</Text>
      </View>


    </Pressable>
        </View>
    
  )

}

export default inscripcionItem