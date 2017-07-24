import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2ee64d',
    paddingTop: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#e8f7ac',
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
    color: '#8ec3f2',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button :{
    backgroundColor: '#93aabd',
  },
  theamChanging: {
    color: '#b59ef0',
    backgroundColor: '#19b37d',
    padding: 20, fontWeight: 'bold', 
  },
  
});


  module.exports = pktheme2;