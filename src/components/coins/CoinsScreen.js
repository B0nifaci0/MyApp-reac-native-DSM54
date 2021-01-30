//importamos react
import React, { Component } from 'react';
//importar los componentes nativos de react declaromos com pressable
//declaramos compente styleshet para hacer nuectro css
import {View, Text, Pressable, StyleSheet } from 'react-native';

//declaramos nuestro componente de tipo class

class CoinsScreen extends Component{
    
    //declaros una funcion para llamar con props la vista de detalle
    handlesPress = () => {
        console.log("el grupo DSM-54 ENTRA A LA PANTALLA DETALLE");
        this.props.navigation.navigate('CoinDetailsScreen')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}>Mi primer pantalla realizado con los alumno del DSM-53 </Text>
                <Pressable  style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Ir  a Detalle </Text></Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "blue"
     },
    btn:{
        padding : 8 ,
        backgroundColor : "red",
        borderRadius : 8,
        margin : 22   
    },
    btnText:{
        color: "#fff",
        textAlign: "center",

    }

})

export default CoinsScreen;
