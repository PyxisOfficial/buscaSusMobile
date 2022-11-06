import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import api from './src/pages/services/api';

//--------------------------------------------------

import Theme from './src/pages/global/styles/Theme';


//---------------------------------------------------




export default function App() {

  const [FontsLoaded] = useFonts({

      Poppins_300Light,
      Poppins_500Medium,
      Poppins_700Bold

  })
  
  if (!FontsLoaded){
    return <AppLoading />
  }
  
  return (
  
    <ThemeProvider theme={Theme} >
      <NavigationContainer >
        <Routes/>
      </NavigationContainer>
     </ThemeProvider>
 
  );
}