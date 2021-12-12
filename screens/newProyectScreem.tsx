import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, Alert, Picker, Pressable, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../components/Alert';


const NEW_PROY_CREATION= gql`
mutation createproyecto(
  $nombreProy: String!, 
  $objGneral: String!, 
  $objEspe: String!, 
  $presupuesto: Float!, 
  $estadoPro: String!, 
  $fase: String!) {
  createproyecto(
    nombreProy: $nombreProy, 
    objGneral: $objGneral, 
    objEspe: $objEspe, 
    presupuesto: $presupuesto, 
    estadoPro: $estadoPro, 
    fase: $fase
    ) {
    nombreProy
    objGneral
    objEspe
    presupuesto
    estadoPro
    fase
  }
}
`;

const NewProyectScreen =() => {
  const [nombreProy, setNombreProy]=useState("")
  const [objGneral, setObjGneral]=useState("")
  const [objEspe, setObjEspe]=useState("")
  const [presupuesto,setPresupuesto]= useState("")
  const [estadoPro,setEstadoPro]= useState("")
  const [fase,setFase]= useState("")
  

  const navegation= useNavigation();

  // mutation[0] : A function to trigger the mutation
  // mutation[1] : result object 
  //    { data,error, loading }
  const [NewProyect, { data, error, loading }] = useMutation(NEW_PROY_CREATION);
  if (error) {
    Alert.alert('Error registrando tarea, por favor intente de nuevo')
  }

  {/*if (data){
    AsyncStorage.setItem("token",data.signUp.token)
    .then(()=>{
      AsyncStorage.setItem("rol",data.signUp.rol)
      if (data.signUp.rol=="Estudiante"){
        navegation.navigate("Home")
      }
    })
  }*/}

 /*   const reload = ()=>{
    window.location.reload();
  }  */

  if (data) {
    AsyncStorage.setItem('token',data.NewProyect.token)
    .then(()=>{ 
        
        navegation.navigate("Projects");
        
      })
  }

  const onSubmit = () =>{
    NewProyect({variables: {nombreProy, objGneral,objEspe,presupuesto,estadoPro,fase}})
  }
 

  return (
    <View style={{padding:20}}>
      <Text style={{
          alignSelf:"center",
          fontSize:25,
          fontWeight:"bold"
      }}>Registro de Nuevo Proyecto</Text>
      
    <TextInput
    placeholder="Titulo del Proyecto"
    value={nombreProy}
    onChangeText={setNombreProy}
    style={{
      color:"blue",
      fontSize:18,
      marginVertical:25,
      width:'50%',
      marginHorizontal:"25%"
    }}
    />

    <TextInput
        placeholder="Objetivo General"
        value={objGneral}
        onChangeText={setObjGneral}
        style={{
          color:"blue",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        />

    <TextInput
        placeholder="Objetivo Especifico"
        value={objEspe}
        onChangeText={setObjEspe}
        style={{
          color:"blue",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        />

      <TextInput
          placeholder="Presupuesto"
          value={presupuesto}
          onChangeText={setPresupuesto}
          style={{
            color:"blue",
            fontSize:18,
            marginVertical:25,
            width:'50%',
            marginHorizontal:"25%"
          }}
          />

      <Picker
        selectedValue={estadoPro}
        style={{
          color:"black",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        onValueChange={(itemValue, itemIndex) => setEstadoPro(itemValue)}
      >
        <Picker.Item label="Inactivo" value="Inactivo" />  
        <Picker.Item label="Activo" value="Activo" />
              
      </Picker>

      <Picker
        selectedValue={fase}
        style={{
          color:"black",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        onValueChange={(itemValue, itemIndex) => setFase(itemValue)}
      >
        <Picker.Item label="Nulo" value="Nulo" />
       
      </Picker>


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

export default NewProyectScreen