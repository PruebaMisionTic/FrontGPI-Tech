import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from '../ProjectItem/styles';


interface UserItemProps {
  user: {
    id :string,
    identificacion:string,
    nombre:string,
    apellido:string,
    rol:string,
    status:string
  }
}

const UserItem = ({ user }: UserItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ToDoScreen' )
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

      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{user.nombre}</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.time}>{user.apellido}</Text>
      </View> 

      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{user.identificacion}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{user.rol}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Text style={styles.time}>{user.status}</Text>
      </View>      

    </Pressable>
        </View>
    
  )

}

export default UserItem