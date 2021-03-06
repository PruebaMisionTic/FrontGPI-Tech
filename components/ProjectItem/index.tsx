import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import ProjectsScreen from '../../screens/ProjectsScreen';

interface ProjectItemProps {
  project: {
    id: string,
    nombreProy: string,
    createdAt: string,
    objGneral: string,
    objEspe: string,
        users: string[]
  }
}

const ProjectItem = ({ project }: ProjectItemProps) => {
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
        <Text style={styles.time}>{project.nombreProy}</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.time}>{project.createdAt}</Text>
      </View> 

      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{project.objGneral}</Text>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{project.objEspe}</Text>
      </View>      

    </Pressable>
        </View>
    
  )

}

export default ProjectItem