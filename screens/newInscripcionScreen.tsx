import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList, Picker, Pressable, TextInput } from 'react-native';
import { Text, View} from '../components/Themed';
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../components/Alert';


const INSCRIPCION_CREATION = gql`
mutation createinscripciones(
  $proyectosId:ID!,
  $userId: ID!,
	$estadoIns:String!,)
	{
  createinscripciones(
    proyectosId:$proyectosId,
    userId:$userId,
		estadoIns:$estadoIns,
    )}
		{
     id,
     estadoIns,
    user {
    id
    identificacion
    nombre
    apellido
    rol
  }
  proyectos{
      id
      

  }
  }

`;

const newInscripcionScreen =() => {
  const [estadoIns, setestadoIns]=useState("")
  
  
  

  const navegation= useNavigation();

  // mutation[0] : A function to trigger the mutation
  // mutation[1] : result object 
  //    { data,error, loading }

  const [newInscripcion, { data, error, loading }] = useMutation(INSCRIPCION_CREATION);
  /* useEffect(() => {
    if (error) {
      alert("Error registrando Proyecto")
    }
  }, [error]) */

 if (error) {
    Alert.alert('Error registrando inscripcion')
  } 

  {/*if (data){
    AsyncStorage.setItem("token",data.newProyect.token)
    .then(()=>{
      AsyncStorage.setItem("rol",data.signUp.rol)
      if (data.signUp.rol=="Estudiante"){
        navegation.navigate("Home")
      }
    })
  }*/}

    const reload = ()=>{
    window.location.reload();
  }  

  if (data) {
     alert('inscripcion creado correctamente')       
        navegation.navigate("inscripcion");
        reload()
  }

  const onSubmit = () =>{
    newInscripcion({variables: { estadoIns }})
  }
 

  return (
    <View style={{padding:20}}>
      <Text style={{
          alignSelf:"center",
          fontSize:25,
          fontWeight:"bold"
      }}>Registro de Nuevo Proyecto</Text>
      
    <TextInput
    placeholder="estadoIns"
    value={estadoIns}
    onChangeText={setestadoIns}
    style={{
      color:"blue",
      fontSize:18,
      marginVertical:25,
      width:'50%',
      marginHorizontal:"25%"
    }}
    />



      <Pressable
      onPress={onSubmit} 
        style={{
          backgroundColor:'#004080',
          height:50,
          borderRadius:5,
          alignItems:'center',
          justifyContent:"center",
          marginTop:30,
          width:'50%',
          marginHorizontal:"25%",
        }}
        >
          {loading && <ActivityIndicator />}
          <Text
            style={{
              color:"white",
              fontSize:18,
              fontWeight:"bold"
            }} >
              Crear Proyecto
              </Text>
        </Pressable>

    </View>
  );
}

export default newInscripcionScreen