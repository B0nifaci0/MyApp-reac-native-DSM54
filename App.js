/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CoinsStack from './src/components/coins/CoinsStack';
import { NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <>
     <NavigationContainer>
       <CoinsStack /> 
     </NavigationContainer>
    </>
  );
};



export default App;
