//importar react
import React from 'react'; 
//import libreria stack
import { createStackNavigator } from '@react-navigation/stack';

//importamos nuesto componente de CoinsScreen 
import CoinsScreen from './CoinsScreen';

//declarar constante para stack
const Stack = createStackNavigator();


//empez<mos a construir nuesto componente de tipo stalles

const CoinsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="DSM-54"  component={CoinsScreen}/>
        </Stack.Navigator>

    )
}

export default CoinsStack;