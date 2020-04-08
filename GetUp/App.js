import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Swiper from 'react-native-swiper'; // 1.5.13
 
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.onPressNext = this.onPressNext.bind(this);
    this.onPressAlarm = this.onPressAlarm.bind(this);
    this.OnPressTasks = this.OnPressTasks.bind(this);
    this.onPressPrev = this.onPressPrev.bind(this);
    this.onPressPrev2 = this.onPressPrev2.bind(this);
  }
 
  onPressPrev = () => {
    this.refs.swiper.scrollBy(-1)
  }
 
  onPressPrev2 = () => {
    this.refs.swiper.scrollBy(-2);
  }
 
  onPressNext = () => {
    this.refs.swiper.scrollBy(1);
  }
 
  onPressAlarm = () => {
    this.refs.swiper.scrollBy(1);
  }
 
  OnPressTasks = () => { 
    this.refs.swiper.scrollBy(2)
  }
 
  render(){
  return (
    <Swiper style={styles.wrapper} showsButtons={true} ref={'swiper'}>
    <View style={styles.container}>
      <Text style={styles.bigTitle}>GetUp</Text>
      <Text style={styles.text}>The app that gets your a** out of bed</Text>
      <View style={styles.button}>
      <Button onPress={this.onPressNext} title="INPUT SETTINGS" color='white'></Button>
      </View>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Settings Page</Text>
      <View style={styles.button}>
      <Button onPress={this.onPressAlarm} title="SET ALARM PAGE" color='white'></Button>
      </View>
      <View style={styles.button}>
      <Button onPress={this.OnPressTasks} title="CHOOSE TASKS PAGE" color='white'></Button>
      </View>
    </View>
    <View style={styles.container}>
      <Text>Set Alarm Page</Text>
      <View style={styles.button}>
      <Button onPress={this.onPressPrev} title="SUBMIT ALARM SETTINGS" color='white'></Button>
      </View>
    </View>
    <View style={styles.container}>
      <Text>Choose Tasks Page</Text>
      <View style={styles.button}>
      <Button onPress={this.onPressPrev2} title="CHOOSE TASKS" color='white'></Button>
      </View>
    </View>
  </Swiper>
  );
}
}
 
const styles = StyleSheet.create({
  wrapper: { },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign:'center',
    backgroundColor:'black',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: "solid",
    width: 350,
    height: 100,
    justifyContent: "center",
  },
  title:{
    color:'black',
    fontWeight: "bold",
    fontSize: 30,
    margin: 15,
    textAlign:'center',
  },
  text:{
    color:'black',
    fontSize: 24,
    margin: 15,
    textAlign:'center',
  },
  bigTitle: {
    color:'black',
    fontWeight: "bold",
    fontSize: 50,
    margin: 15,
    textAlign:'center',
  }
});
 

