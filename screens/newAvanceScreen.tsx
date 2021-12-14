import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList, Picker, Pressable, TextInput } from 'react-native';
import { Text, View} from '../components/Themed';
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../components/Alert';


const NEW_AVANCE_CREATION= gql`
mutation createavances(
	$descrip:String!,
	$ObserLider:String!,)
	{
	createavances(
		descrip:$descrip, 
		ObserLider:$ObserLider,
		){
     id,
     descrip,
     ObserLider,
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
}
`;

const newAvanceScreen =() => {
  const [descrip, setdescrip]=useState("")
  const [ObserLider, setObserLider]=useState("")
  
  

  const navegation= useNavigation();

  // mutation[0] : A function to trigger the mutation
  // mutation[1] : result object 
  //    { data,error, loading }

  const [newAvance, { data, error, loading }] = useMutation(NEW_AVANCE_CREATION);
  /* useEffect(() => {
    if (error) {
      alert("Error registrando Proyecto")
    }
  }, [error]) */

 if (error) {
    Alert.alert('Error registrando avance')
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
     alert('avance creado correctamente')       
        navegation.navigate("avances");
        reload()
  }

  const onSubmit = () =>{
    newAvance({variables: { descrip,ObserLider }})
  }
 

  return (
    <View style={{padding:20}}>
      <Text style={{
          alignSelf:"center",
          fontSize:25,
          fontWeight:"bold"
      }}>Registro de Nuevo Proyecto</Text>
      
    <TextInput
    placeholder="descripcion avance"
    value={descrip}
    onChangeText={setdescrip}
    style={{
      color:"blue",
      fontSize:18,
      marginVertical:25,
      width:'50%',
      marginHorizontal:"25%"
    }}
    />

    <TextInput
        placeholder="Observacion Lider"
        value={ObserLider}
        onChangeText={setObserLider}
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

export default newAvanceScreen