import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../assets/AppHeader'

export default class ReadStory extends React.Component{
           render(){
               return(
                   <View >
                       <AppHeader/>
                      <Text> Search </Text>
                   </View>
               );
           }
}