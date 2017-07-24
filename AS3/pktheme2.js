import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1768b3',
    paddingTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24, 
    fontWeight: 'italic', 
    color: '#29690c',
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    color: '',
  },
  weatherIcon: {
    width:80,
    height:80,
  },
  dayForecast: {
    flex:1, 
    flexDirection: "row",
    width: '100%',
  },
  textForecast: {
    paddingTop: 20,
    flex:1,
    textAlign:'center',
    color: '#f5e60e',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button :{
    backgroundColor: '#0ce9f5',
  },
  theamChanging: {
    color: '#f5256d',
    backgroundColor: '#f523e3',
    padding: 20, fontWeight: 'italic', 
  },
  
});


  module.exports = pktheme2;