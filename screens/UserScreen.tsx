import * as React from 'react';
import { Alert, FlatList, Pressable, StyleSheet } from 'react-native';
import UserItem from '../components/UserItem';
import { Text, View } from '../components/Themed';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, gql } from '@apollo/client';
import alert from '../components/Alert';
import {ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MY_USER = gql`
query MisUsuarios {
    misUsuarios {
      id
      identificacion
      nombre
      apellido
      rol
      status
    }
  }
`;

export default function UserScreen() {
  const navegation= useNavigation();
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    navegation.navigate("SignIn")
  }

  const UpdateUsuario = async () =>{
    navegation.navigate("UpdateUsuario")
  }

  const [user, setUser] = useState([]);

  const { data, error, loading } = useQuery(MY_USER)

  useEffect(() => {
    if (error) {
      alert("Error Cargando los Usuarios. Intenta de Nuevo")
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setUser(data.misUsuarios);
    }
  }, [data]);



  return (
    <View style={styles.container}>
      
      <Pressable
      onPress={logOut} 
      style={{
        backgroundColor:'#004080',
        height:50,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:"85%",
        width:'15%',
        position:"absolute"

      }}>
        
          
      <Text
        style={{
          color:"white",
          fontSize:18,
          fontWeight:"bold"
        }}>
          Cerrar Sesión
        </Text>
      </Pressable>
      <Text style={styles.title}>LISTA DE USUARIOS</Text>
      <FlatList
        data={user}
        renderItem={({item}) => <><UserItem user={item} /></>}
        style={{ width: '100%' }}
      />
       <Pressable
      onPress={UpdateUsuario} 
      style={{
        backgroundColor:'#004080',
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:"center",
        marginTop:30,
        width:'20%',
        marginHorizontal:"5%",
      }}>  
      <Text
        style={{
          color:"white",
          fontSize:18,
          fontWeight:"bold"
        }}>
          Actualizar Usuario
        </Text>
      </Pressable>
       
    </View>

    

  );
}
const styles = StyleSheet.create({
  container: {
    padding: 12,
    width:"80%",
    marginHorizontal:"10%"
  },
  root: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#404040',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    borderColor:"black",
    borderRadius:2,
    fontWeight: 'bold',
    textAlign:"center",
    padding: 5,
    color:"black",
    width:"80%",
    marginHorizontal:"10%",
    marginBottom:30
  },
  time: {
    color: 'darkgrey'
  }
});