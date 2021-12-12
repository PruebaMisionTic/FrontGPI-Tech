import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { ActivityIndicator, Alert, Picker, Pressable, TextInput } from 'react-native';
import { Text, View } from '../components/Themed'
import { useMutation, gql } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';



const Update_Usuario= gql`
mutation UpdateUsuario(
    $updateUsuarioId: ID!, 
    $nombre: String!, 
    $apellido: String!, 
    $identificacion: String!,
    $rol:String!, 
    $status:String!) {
      updateUsuario(
          id: $updateUsuarioId, 
          nombre: $nombre, 
          apellido: $apellido, 
          identificacion: $identificacion,
          rol:$rol,
          status: $status) {
        identificacion
        nombre
        apellido
        rol
        status      
      }
    }
`;

const UpdateUsuario =() => {
  
  const [nombre, setNombre]=useState("")
  const [apellido, setApellido]=useState("")
  const [identificacion, setIdentificacion]=useState("")
  const [rol, setRol] = useState("");
  const [status, setStatus] = useState("");
  const navegation= useNavigation();
  
  
  // mutation[0] : A function to trigger the mutation
  // mutation[1] : result object 
  //    { data,error, loading }
  const [UpdateUsuario, { data, error, loading }] = useMutation(Update_Usuario);
  if (error) {
    Alert.alert('Error registrandose, por favor intente de nuevo')
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

  if (data) {
    AsyncStorage.setItem('token', data.token)
      .then(() => {
        navegation.navigate("Home");
      })
  }

  const onSubmit = () =>{
    UpdateUsuario({variables: {identificacion, nombre, apellido, rol, status}})
  }
 

  return (
    <View style={{padding:20}}>
      <Text style={{
          alignSelf:"center",
          fontSize:25,
          fontWeight:"bold"
      }}>Actualizacion Registro Usuario</Text>
      
      <TextInput
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
        style={{
          color:"black",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
      />

      <TextInput
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
          style={{
            color:"black",
            fontSize:18,
            marginVertical:25,
            width:'50%',
            marginHorizontal:"25%"
          }}
      />

      <TextInput
          placeholder="Identificacion"
          value={identificacion}
          onChangeText={setIdentificacion}
          style={{
            color:"black",
            fontSize:18,
            marginVertical:25,
            width:'50%',
            marginHorizontal:"25%"
          }}
      />


      <Picker
        selectedValue={rol}
        style={{
          color:"black",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        onValueChange={(itemValue, itemIndex) => setRol(itemValue)}
      >
        <Picker.Item label="Estudiante" value="Estudiante" />
        <Picker.Item label="Administrador" value="Administrador" />
        <Picker.Item label="Lider" value="Lider"/>
        
      </Picker>

      <Picker
        selectedValue={status}
        style={{
          color:"black",
          fontSize:18,
          marginVertical:25,
          width:'50%',
          marginHorizontal:"25%"
        }}
        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        >
        <Picker.Item label="Pendiente" value="Pendiente" />
        <Picker.Item label="Autorizado" value="Autorizado" />
        <Picker.Item label="No Autorizado" value="No Autorizado" />
        
        
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
            color:"black",
            fontSize:18,
            fontWeight:"bold"
          }} >
          Actualizar
        </Text>
    </Pressable>

  

    </View>
  );

  
}
export default UpdateUsuario