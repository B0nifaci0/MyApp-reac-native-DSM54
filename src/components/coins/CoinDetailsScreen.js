// importamos react 
import React, { Component } from 'react';
//importamos componentes nativos
import {View, Text,StyleSheet } from 'react-native';

//declaramos nuestro componente
class CoinDetailsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Mi primer pantalla detalle Pantalla De Detalle DEL DSM-54</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "yellow"
    },
    text:{
        color : "#000",
        textAlign: "center",
    }

});

export default CoinDetailsScreen;