
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableHighlight,
  Scroll,
  Button
} from 'react-native';
import pktheme1 from './pktheme1.js';
import pktheme2 from './pktheme2.js';

export default class testapp extends Component {
    
    state = {
        cityName: '',
        countryName: '',
        countryCode: 'TH',
        error: '',
        degree: ' \u2109', 

        tempone: '-',
        temptwo: '-',
		tempthree: '-',
       	tempfour: '-',
		tempfive: '-',

        farenone: '-',
        farentwo: '-',
       	farenthree: '-',
        farenfour: '-',
        farenfive: '-',
        
        celsiusone: '-',
        celsiustwo: '-',
        celsiusthree: '-',
        celsiusfour: '-',
        celsiusfive: '-',

        weatherone: 'n/a',
        weathertwo: 'n/a',
        weatherthree: 'n/a',
        weatherfour: 'n/a',
        weatherfive: 'n/a',

        iconone : 'openweathermap.org/img/w/10d.png',
        icontwo : 'openweathermap.org/img/w/10d.png',
        iconthree : 'openweathermap.org/img/w/10d.png',
        iconfour : 'openweathermap.org/img/w/10d.png',
        iconfive : 'openweathermap.org/img/w/10d.png',
        styles: pktheme1,
      }

      _handleName() {
        var cityName = this.state.cityName;
        var countryCode = this.state.countryCode;
        var appid = 'a524fa19c495b3a3d4940d375355ef8e';
        console.log(this.state);
        //fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+appid)
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+','+'&appid='+appid)
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            this.setState({
                cityName: cityName,

                tempone: Number(responseJSON.list[0].main.temp).toFixed(2),
				temptwo: Number(responseJSON.list[8].main.temp).toFixed(2),
				tempthree: Number(responseJSON.list[16].main.temp).toFixed(2),
				tempfour: Number(responseJSON.list[24].main.temp).toFixed(2),
				tempfive: Number(responseJSON.list[32].main.temp).toFixed(2),

                weatherone: responseJSON.list[0].weather[0].main,
				weathertwo:  responseJSON.list[8].weather[0].main,
				weatherthree:  responseJSON.list[16].weather[0].main,
                weatherfive:  responseJSON.list[32].weather[0].main,
                weatherfour:  responseJSON.list[24].weather[0].main,

                iconone : 'openweathermap.org/img/w/'+responseJSON.list[0].weather[0].icon+'.png',
                icontwo : 'openweathermap.org/img/w/'+responseJSON.list[8].weather[0].icon+'.png',               
                iconthree : 'openweathermap.org/img/w/'+responseJSON.list[16].weather[0].icon+'.png',          
                iconfour : 'openweathermap.org/img/w/'+responseJSON.list[24].weather[0].icon+'.png', 
                iconfive : 'openweathermap.org/img/w/'+responseJSON.list[32].weather[0].icon+'.png',
            }),this._calculateTemp();
        })
        .catch((error) => {
            this.setState({
              error: 'City not found',
            },console.warn(error));
    
        });
    }

     _calculateTemp(){ 
      this.setState({
        
        celsiusone : Number(this.state.temp1-273.15).toFixed(2),
		celsiustwo : Number(this.state.temp2-273.15).toFixed(2),
		celsiusthree : Number(this.state.temp3-273.15).toFixed(2),
        celsiusfour : Number(this.state.temp4-273.15).toFixed(2),
        celsiusfive : Number(this.state.temp5-273.15).toFixed(2),
        
        farenone : Number((this.state.temp1*9/5) -495.67).toFixed(2),
        farentwo : Number((this.state.temp2*9/5) -495.67).toFixed(2),
        farenthree : Number((this.state.temp3*9/5) -495.67).toFixed(2),       
        farenfour : Number((this.state.temp4*9/5) -495.67).toFixed(2),        
        farenfive : Number((this.state.temp5*9/5) -495.67).toFixed(2),

      })
      
      if(this.state.degree== ' \u2103'){
        this._toCelcius();
      }else{
        this._toFahrenheit();
      }
    }

    

    _toFahren(){
      this.setState({
        degree: ' \u2109',
       	tempone : this.state.farenone,
        temptwo : this.state.farentwo,
        tempthree : this.state.farenthree,
        tempfour : this.state.farenfour,
        tempfive : this.state.farenfive,
      })    
    }

     _toCelcius(){
      this.setState({
        degree: ' \u2103',
        tempone : this.state.celsiusone,
        temptwo : this.state.celsiustwo,
        tempthree : this.state.celsiusthree,
        tempfour : this.state.celsiusfour,
        tempfive : this.state.celsiusfive,
      })    
    }
  

    _theamChanging(){
      if(this.state.styles == pktheme1){
        this.setState({
          styles : pktheme2,
        })
      }else{
        this.setState({
          styles : pktheme1,
        })
      }
    } 

     _onSubmit(event){
      console.log(this.state);
      if(this.state.cityName==''){
        this.setState({
          error: 'You must input the city name'
        },console.log(this.state));
      }else{
        this.setState({
          error: ''
        },this._handleName());
      }
     
    }


    render() {
    const styles = pktheme1;
    return (
        <View style={this.state.styles.container}>
            <View style={{flex: 1, flexDirection: "column", width: "75%", alignItems: "center"}}>
                <Text style={this.state.styles.header}>90 Forecast</Text>
                <TextInput style={this.state.styles.textInput} ref= {(el) => { this.cityName = el; }} 
                          onChangeText={(cityName) => this.setState({cityName})} value={this.state.cityName} placeholder="City" placeholderTextColor="grey"/>
                <Text style={{fontSize: 14, color: "blue"}}>{this.state.error}</Text>
                <View style={{flexDirection:"row"}}>
                    <Button style={this.state.styles.button} color="#ffb3b3" title='Celcius' onPress={() => this._toCelcius()}/>  
                    <Text style={{width:6}}></Text>
                    <Button style={this.state.styles.button} color="#ffb3b3" title='Fahrenheit' onPress={() => this._toFahren()}/>  
                    <Text style={{width:6}}></Text>
                    <Button style={this.state.styles.button} color="#ffb3b3" title='SUBMIT' onPress={() => this._onSubmit()}/>  
                </View>
                <View style={{flex: 3, flexDirection: "column"}}>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 1</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weatherone}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temptwo}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.iconone}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 2</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weathertwo}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.temptwo}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.icontwo}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 3</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weatherthree}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.tempthree}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.iconthree}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 4</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weatherfour}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.tempfour}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.iconfour}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
                  <View style={this.state.styles.dayForecast}>
                    <Text style={this.state.styles.textForecast}>DAY 5</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.weatherfive}</Text>
                    <Text style={this.state.styles.textForecast}>{this.state.tempfive}{this.state.degree}</Text>
                    <Image source={{uri: 'http://' + this.state.iconfive}}
                    style={this.state.styles.weatherIcon} resizeMode='cover'></Image>
                  </View>
              </View>  
            </View>
            <Text style={this.state.styles.theamChanging} onPress={()=>this._theamChanging()}>
                Switch theme
            </Text>
      </View>
    );
  }
}