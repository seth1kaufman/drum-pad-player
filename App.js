import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, 
  Button, TouchableOpacity, Pressable, Image, Dimensions, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from "expo-font";
import { Asset } from 'expo-asset';
import InsetShadow from 'react-native-inset-shadow';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import * as ScreenOrientation from 'expo-screen-orientation';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
let deviceRatio = deviceWidth/deviceHeight;

class MainDrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
        highTom: true,
        midTom: true,
        lowTom: true,
        cowbell: true,
        maracas: true,
        clave: true,
        cymbal: true,
        hihatOpen: true,
        hihatClosed: true,
        bassDrum: true,
        snare: true,
        clap: true,
        imageReady: false,
    }
    this.handlePlaySound= this.handlePlaySound.bind(this);
    

  }
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });
    this.drumSounds = {
      bassDrum: require('./assets/bassdrum.wav'),
      clap: require('./assets/E808_CP-01.wav'),
      snare: require('./assets/E808_SD-02.wav'),
      hihatClosed: require('./assets/E808_CH-02.wav'),
      hihatOpen: require('./assets/E808_OH-03.wav'),
      cymbal: require('./assets/E808_CY-01.wav'),
      cowbell: require('./assets/E808_CB-01.wav'),
      highTom: require('./assets/E808_HT-01.wav'),
      midTom: require('./assets/E808_MT-01.wav'),
      lowTom: require('./assets/E808_LT-01.wav'),
      maracas: require('./assets/E808_MA-02.wav'),
      clave: require('./assets/E808_CL-01.wav'),
    };
   


  }
 
  handlePlaySound = async type => {
    const soundObject = new Audio.Sound()

    try {
      let source = this.drumSounds[type]
      //let source = require('./assets/bassdrum.wav')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }
  
  render() {
  
    return (

      <View style={styles.container}>

        {/*<ImageBackground source={background808} resizeMode="cover" style={styles.backgroundImage}>

    </ImageBackground>*/}
          <LinearGradient
       
        colors={['#595959', '#3f3f3f']}
        
        start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.backgroundImage}>
      
     
      <LinearGradient
     
     colors={['#f16d2d', '#f38751', '#f38751', '#f16d2d']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
   
    }}
   />

        <View style={styles.grid}>
        <LinearGradient
     
     colors={['#f16d2d', '#f38751', '#f38751', '#f16d2d']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginBottom: '1%',
    }}
   />
  
     
          <Pressable id="hi-tom" onPressIn={() => {this.handlePlaySound('highTom'); this.setState({
            highTom: false
          }) }} onPressOut={()=>{this.setState({ highTom: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.highTom ? '#f04536' : '#f16d2d'} 
          containerStyle={this.state.highTom ? {backgroundColor: '#f2675a'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="mid-tom" onPressIn={() => {this.handlePlaySound('midTom'); this.setState({
            midTom: false
          }) }} onPressOut={()=>{this.setState({ midTom: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.midTom ? '#fbdc19' : '#f16d2d'} 
          containerStyle={this.state.midTom ? {backgroundColor: '#fbe23f'} : {backgroundColor: '#f38751'}}  
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="low-tom" onPressIn={() => {this.handlePlaySound('lowTom'); this.setState({
            lowTom: false
          }) }} onPressOut={()=>{this.setState({ lowTom: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.lowTom ? '#ebebeb' : '#f16d2d'} 
          containerStyle={this.state.lowTom ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          
          <Pressable id="cowbell" onPressIn={() => {this.handlePlaySound('cowbell'); this.setState({
            cowbell: false
          }) }} onPressOut={()=>{this.setState({ cowbell: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.cowbell? '#f04536' : '#f16d2d'} 
          containerStyle={this.state.cowbell ? {backgroundColor: '#f2675a'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="maracas" onPressIn={() => {this.handlePlaySound('maracas'); this.setState({
            maracas: false
          }) }} onPressOut={()=>{this.setState({ maracas: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.maracas? '#fbdc19' : '#f16d2d'} 
          containerStyle={this.state.maracas ? {backgroundColor: '#fbe23f'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="clave" onPressIn={() => {this.handlePlaySound('clave'); this.setState({
            clave: false
          }) }} onPressOut={()=>{this.setState({ clave: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.clave ? '#ebebeb' : '#f16d2d'} 
          containerStyle={this.state.clave ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="cymbal" onPressIn={() => {this.handlePlaySound('cymbal'); this.setState({
            cymbal: false
          }) }} onPressOut={()=>{this.setState({ cymbal: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.cymbal? '#f04536' : '#f16d2d'} 
          containerStyle={this.state.cymbal ? {backgroundColor: '#f2675a'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
          <Pressable id="open-hihat" onPressIn={() => {this.handlePlaySound('hihatOpen'); this.setState({
            hihatOpen: false
          }) }} onPressOut={()=>{this.setState({ hihatOpen: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.hihatOpen? '#fbdc19' : '#f16d2d'} 
          containerStyle={this.state.hihatOpen ? {backgroundColor: '#fbe23f'} : {backgroundColor: '#f38751'}}  
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>
          <Pressable id="closed-hihat" onPressIn={() => {this.handlePlaySound('hihatClosed'); this.setState({
            hihatClosed: false
          }) }} onPressOut={()=>{this.setState({ hihatClosed: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.hihatClosed? '#ebebeb' : '#f16d2d'} 
          containerStyle={this.state.hihatClosed ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>
          <Pressable id="bass" onPressIn={() => {this.handlePlaySound('bassDrum'); this.setState({
            bassDrum: false
          }) }} onPressOut={()=>{this.setState({ bassDrum: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.bassDrum? '#f04536' : '#f16d2d'} 
          containerStyle={this.state.bassDrum ? {backgroundColor: '#f2675a'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>
          <Pressable id="snare" onPressIn={() => {this.handlePlaySound('snare'); this.setState({
            snare: false
          }) }} onPressOut={()=>{this.setState({ snare: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.snare? '#fbdc19' : '#f16d2d'} 
          containerStyle={this.state.snare ? {backgroundColor: '#fbe23f'} : {backgroundColor: '#f38751'}}  
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>
          <Pressable id="clap" onPressIn={() => {this.handlePlaySound('clap'); this.setState({
            clap: false
          }) }} onPressOut={()=>{this.setState({ clap: true})}} style={styles.title}>
          <InsetShadow shadowColor={this.state.clap? '#ebebeb' : '#f16d2d'} 
          containerStyle={this.state.clap ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f38751'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>

           <LinearGradient
     
     colors={['#f16d2d', '#f38751', '#f38751', '#f16d2d']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginTop: '1%',
    }}
   />
        </View> 
        <LinearGradient
     
     colors={['#f16d2d', '#f38751', '#f38751', '#f16d2d']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
    
    }}
   />   
        </LinearGradient>
      </View >
    )
  }
}

class SecondDrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highTom: true,
      lowTom: true,
      cymbal: true,
      hihatOpen: true,
      hihatClosed: true,
      bassDrum: true,
      snare: true,
      
      imageReady: false,
  }
    this.handlePlaySound.bind(this);



  }
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });
    this.drumSounds = {
      bd: require('./assets/01bd_max.wav'),
      sd: require('./assets/02sd_max.wav'),
      ch: require('./assets/03ch_max.wav'),
      oh: require('./assets/04oh_max.wav'),
      lt: require('./assets/05lt_max.wav'),
      ht: require('./assets/06ht_max.wav'),
      cy: require('./assets/07cy_max.wav'),
    }
  }
  handlePlaySound = async type => {
    const soundObject = new Audio.Sound()

    try {
      let source = this.drumSounds[type]
      //let source = require('./assets/bassdrum.wav')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      
      <View style={styles.container606}>
      
          <LinearGradient
       
       colors={['#595959', '#3f3f3f']}
       start={{ x: 0, y: 0}}
       end={{x: 1, y: 1}}
       style={styles.backgroundImage}>
         <LinearGradient
     
     colors={['#b1232f', '#cd6b6f', '#cd6b6f', '#b1232f']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
    
    }}
   />
        <View style={styles.grid606}>
        <LinearGradient
     
     colors={['#b1232f', '#cd6b6f', '#cd6b6f', '#b1232f']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginBottom: '1%',
    }}
   />
  
        
              <Pressable id="ht" onPressIn={() => {this.handlePlaySound('ht'); this.setState({
            highTom: false
          }) }} onPressOut={()=>{this.setState({ highTom: true})}} style={styles.pad606}>
            <InsetShadow shadowColor={this.state.highTom ? '#464C6C' : '#b1232f'} 
            containerStyle={this.state.highTom ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
            shadowRadius={29} shadowOpacity={1}>
              <View >
              </View>
            </InsetShadow>
              </Pressable>
  
       
          <Pressable id="lt" onPressIn={() => {this.handlePlaySound('lt'); this.setState({
            lowTom: false
          }) }} onPressOut={()=>{this.setState({ lowTom: true})}} style={styles.pad606}>
            <InsetShadow shadowColor={this.state.lowTom ? '#464C6C' : '#b1232f'} 
            containerStyle={this.state.lowTom ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
            shadowRadius={30} shadowOpacity={1}>
              <View >
              </View>
            </InsetShadow>
          </Pressable>
        
          <Pressable id="cy" onPressIn={() => {this.handlePlaySound('cy'); this.setState({
            cymbal: false
          }) }} onPressOut={()=>{this.setState({ cymbal: true})}} style={styles.pad606}>
         <InsetShadow shadowColor={this.state.cymbal ? '#464C6C' : '#b1232f'} 
            containerStyle={this.state.cymbal ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
            shadowRadius={26} shadowOpacity={1}>
              <View >
              </View>
            </InsetShadow>
          </Pressable>
          <Pressable id="oh" onPressIn={() => {this.handlePlaySound('oh'); this.setState({
            hihatOpen: false
          }) }} onPressOut={()=>{this.setState({ hihatOpen: true})}} style={styles.pad606wide}>
     <InsetShadow shadowColor={this.state.hihatOpen ? '#464C6C' : '#b1232f'} 
            containerStyle={this.state.hihatOpen ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
            shadowRadius={40} shadowOpacity={1}>
              <View >
              </View>
            </InsetShadow>
            </Pressable>      
          <Pressable id="ch" onPressIn={() => {this.handlePlaySound('ch'); this.setState({
            hihatClosed: false
          }) }} onPressOut={()=>{this.setState({ hihatClosed: true})}} style={styles.pad606wide}>
     <InsetShadow shadowColor={this.state.hihatClosed ? '#464C6C' : '#b1232f'} 
            containerStyle={this.state.hihatClosed ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
            shadowRadius={38} shadowOpacity={1}>
              <View >
              </View>
            </InsetShadow>
            </Pressable>

<Pressable id="bd" onPressIn={() => {this.handlePlaySound('bd'); this.setState({
           bassDrum: false
          }) }} onPressOut={()=>{this.setState({ bassDrum: true})}} style={styles.pad606wide}>
          <InsetShadow shadowColor={this.state.bassDrum ? '#464C6C' : '#b1232f'} 
                 containerStyle={this.state.bassDrum ? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
                 shadowRadius={42} shadowOpacity={1}>
                   <View >
                   </View>
                 </InsetShadow></Pressable>
<Pressable id="sd" onPressIn={() => {this.handlePlaySound('sd'); this.setState({
            snare: false
          }) }} onPressOut={()=>{this.setState({ snare: true})}} style={styles.pad606wide}>
          <InsetShadow shadowColor={this.state.snare ? '#464C6C' : '#b1232f'} 
                 containerStyle={this.state.snare? {backgroundColor: '#99abbe'} : {backgroundColor: '#cd6b6f'}} 
                 shadowRadius={45} shadowOpacity={1}>
                   <View >
                   </View>
                 </InsetShadow></Pressable>
  
            <LinearGradient
     
     colors={['#b1232f', '#cd6b6f', '#cd6b6f', '#b1232f']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginTop: '1%',
    }}
   />
        </View>
        <LinearGradient
     
     colors={['#b1232f', '#cd6b6f', '#cd6b6f', '#b1232f']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
    
    }}
   />
  
        
        </LinearGradient>
      </View >
    )
  }
}

class ThirdDrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bassDrum: true,
      clap: true,
      snare: true,
      hihatClosed: true, 
      hihatOpen: true,
      highTom: true,
      midTom: true,
      lowTom: true,
      crash: true,
      ride: true,
    }
    this.handlePlaySound.bind(this);



  }
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });
    this.drumSounds = {
      bassDrum: require('./assets/909_4_Kick_Tuned_High_Decay_Full.wav'),
      clap: require('./assets/909_Clap.wav'),
      snare: require('./assets/909_2_Snare_MD_Snap_Tune_M1.wav'),
      hihatClosed: require('./assets/909_3_Closed_HH_Decay_M2.wav'),
      hihatOpen: require('./assets/909_4_Open_HH_Decay_Long.wav'),
      highTom: require('./assets/909_6_Tom_Short_Decay_High.wav'),
      midTom: require('./assets/909_5_Tom_Short_Decay_Mid.wav'),
      lowTom: require('./assets/909_4_Tom_Long_Decay_Low.wav'),
      crash: require('./assets/909_2_Crash_Tuned_Mid_1.wav'),
      ride: require('./assets/909_2_Ride_Tuned_Mid_1.wav'),
    }
  }
  handlePlaySound = async type => {
    const soundObject = new Audio.Sound()

    try {
      let source = this.drumSounds[type]
      //let source = require('./assets/bassdrum.wav')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <View style={styles.container909}>
  <LinearGradient
       
       colors={['#576474', '#4b5c71']}

       start={{ x: 0, y: 0}}
       end={{x: 1, y: 1}}
       style={styles.backgroundImage}>
  
    
  <LinearGradient
     
     colors={['#f48546', '#f2bba0', '#f2bba0', '#f48546']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
    
    }}
   />

        <View style={styles.grid909}>
        <LinearGradient
     
     colors={['#f48546', '#f2bba0', '#f2bba0', '#f48546']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginBottom: '1%',
    }}
   />
        <Pressable id="hi-tom" onPressIn={() => {this.handlePlaySound('highTom'); this.setState({
            highTom: false
          }) }} onPressOut={()=>{this.setState({ highTom: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.highTom? '#828580' : '#f48546'} 
          containerStyle={this.state.highTom ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="mid-tom" onPressIn={() => {this.handlePlaySound('midTom'); this.setState({
            midTom: false
          }) }} onPressOut={()=>{this.setState({ midTom: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.midTom? '#828580' : '#f48546'} 
          containerStyle={this.state.midTom ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
          </Pressable>
          <Pressable id="low-tom" onPressIn={() => {this.handlePlaySound('lowTom'); this.setState({
            lowTom: false
          }) }} onPressOut={()=>{this.setState({ lowTom: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.lowTom? '#828580' : '#f48546'} 
          containerStyle={this.state.lowTom ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>

          <Pressable id="crash" onPressIn={() => {this.handlePlaySound('crash'); this.setState({
            crash: false
          }) }} onPressOut={()=>{this.setState({ crash: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.crash? '#828580' : '#f48546'} 
          containerStyle={this.state.crash ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="ride" onPressIn={() => {this.handlePlaySound('ride'); this.setState({
            ride: false
          }) }} onPressOut={()=>{this.setState({ ride: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.ride ? '#828580' : '#f48546'} 
          containerStyle={this.state.ride ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="clap"  onPressIn={() => {this.handlePlaySound('clap'); this.setState({
            clap: false
          }) }} onPressOut={()=>{this.setState({ clap: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.clap? '#828580' : '#f48546'} 
          containerStyle={this.state.clap ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="open-hihat"  onPressIn={() => {this.handlePlaySound('hihatOpen'); this.setState({
            hihatOpen: false
          }) }} onPressOut={()=>{this.setState({ hihatOpen: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.hihatOpen? '#828580' : '#f48546'} 
          containerStyle={this.state.hihatOpen ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="closed-hihat"  onPressIn={() => {this.handlePlaySound('hihatClosed'); this.setState({
            hihatClosed: false
          }) }} onPressOut={()=>{this.setState({ hihatClosed: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.hihatClosed? '#828580' : '#f48546'} 
          containerStyle={this.state.hihatClosed? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
       
          
          <Pressable id="snare"  onPressIn={() => {this.handlePlaySound('snare'); this.setState({
            snare: false
          }) }} onPressOut={()=>{this.setState({ snare: true})}} style={styles.pad909}>
          <InsetShadow shadowColor={this.state.snare? '#828580' : '#f48546'} 
          containerStyle={this.state.snare ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <Pressable id="bass"  onPressIn={() => {this.handlePlaySound('bassDrum'); this.setState({
            bassDrum: false
          }) }} onPressOut={()=>{this.setState({ bassDrum: true})}} style={styles.pad909Wide}>
          <InsetShadow shadowColor={this.state.bassDrum? '#828580' : '#f48546'} 
          containerStyle={this.state.bassDrum ? {backgroundColor: '#d0d0cd'} : {backgroundColor: '#f2bba0'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow> 
          </Pressable>
          <LinearGradient
     
     colors={['#f48546', '#f2bba0', '#f2bba0', '#f48546']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '102%',
     height: deviceRatio > .69 ? 0 : '.5%',
    marginTop: '1%',
    }}
   />
        </View>
        <LinearGradient
     
     colors={['#f48546', '#f2bba0', '#f2bba0', '#f48546']}
     locations={[0, .25, .75, 1]}
     start={{ x: 0, y: 0}}
     end={{x: 1, y: 1}}
     style={{width: '120%',
     height: deviceRatio < .69 ? 0 : '.5%',
    
    }}
   />
     
       
</LinearGradient>
      </View >
    )
  }
}

class FourthDrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bassDrum: true,
      clap: true,
      snare: true,
      hihatClosed: true, 
      hihatOpen: true,
      highTom: true,
      midTom: true,
      lowTom: true,
      ride: true,
      crash: true,
      tambourine: true,
      cowbell: true,
      //rimshot: true,
    }
    this.handlePlaySound.bind(this);
    //this.changeScreenOrientation = this.changeScreenOrientation.bind(this);


  }
  
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });
    this.drumSounds = {
      bassDrum: require('./assets/wa_free_707/wa_707_kick1.wav'),
      clap: require('./assets/wa_free_707/wa_707_clap.wav'),
      snare: require('./assets/wa_free_707/wa_707_snare1.wav'),
      hihatClosed: require('./assets/wa_free_707/wa_707_cl-hat.wav'),
      hihatOpen: require('./assets/wa_free_707/wa_707_op-hat.wav'),
      highTom: require('./assets/wa_free_707/wa_707_tom-hi.wav'),
      midTom: require('./assets/wa_free_707/wa_707_tom-mid.wav'),
      lowTom: require('./assets/wa_free_707/wa_707_tom-lo.wav'),
      crash: require('./assets/wa_free_707/wa_707_cymbal.wav'),
      ride: require('./assets/wa_free_707/wa_707_ride.wav'),
      tambourine: require('./assets/wa_free_707/wa_707_tam.wav'),
      cowbell: require('./assets/wa_free_707/wa_707_cowbell.wav'),
      rimshot: require('./assets/wa_free_707/wa_707_rimshot.wav'),
    }
   
  }

 
  handlePlaySound = async type => {
    const soundObject = new Audio.Sound()

    try {
      let source = this.drumSounds[type]
      //let source = require('./assets/bassdrum.wav')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
  
    return (
      <View style={styles.container707}>
  <LinearGradient
       
       colors={['#4D4C47', '#404038']}
       start={{ x: 0, y: 0}}
       end={{x: 1, y: 1}}
       style={styles.backgroundImage}>
   
   <LinearGradient
     
     colors={['#F39E4E', '#FAC091', '#FAC091', '#F39E4E']}
        locations={[0, .25, .75, 1]}
        start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '120%',
        height: deviceRatio < .69 ? 0 : '.5%',
      
    }}
      /> 
        <View style={styles.grid707}>
        <LinearGradient
     
     colors={['#F39E4E', '#FAC091', '#FAC091', '#F39E4E']}
        locations={[0, .25, .75, 1]}
        start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '102%',
        height: deviceRatio > .69 ? 0 : '.5%',
      marginBottom: '1%',
    }}
      /> 
       
        <Pressable id="hi-tom" onPressIn={() => {this.handlePlaySound('highTom'); this.setState({
            highTom: false
          }) }} onPressOut={()=>{this.setState({ highTom: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.highTom ? '#646464' : '#FAC091'} 
          containerStyle={this.state.highTom ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable>      
          <Pressable id="mid-tom" onPressIn={() => {this.handlePlaySound('midTom'); this.setState({
            midTom: false
          }) }} onPressOut={()=>{this.setState({ midTom: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.midTom ? '#646464' : '#FAC091'} 
          containerStyle={this.state.midTom ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={26} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="low-tom" onPressIn={() => {this.handlePlaySound('lowTom'); this.setState({
            lowTom: false
          }) }} onPressOut={()=>{this.setState({ lowTom: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.lowTom ? '#646464' : '#FAC091'} 
          containerStyle={this.state.lowTom ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={30} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="cowbell" onPressIn={() => {this.handlePlaySound('cowbell'); this.setState({
            cowbell: false
          }) }} onPressOut={()=>{this.setState({ cowbell: true})}}  style={styles.pad707}>
          <InsetShadow shadowColor={this.state.cowbell ? '#646464' : '#FAC091'} 
          containerStyle={this.state.cowbell ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>  
          <Pressable id="tambourine" onPressIn={() => {this.handlePlaySound('tambourine'); this.setState({
            tambourine: false
          }) }} onPressOut={()=>{this.setState({ tambourine: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.tambourine ? '#646464' : '#FAC091'} 
          containerStyle={this.state.tambourine ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={30} shadowOpacity={1}>
            <View />
          </InsetShadow>
</Pressable> 
 
          <Pressable id="crash" onPressIn={() => {this.handlePlaySound('crash'); this.setState({
            crash: false
          }) }} onPressOut={()=>{this.setState({ crash: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.crash ? '#646464' : '#FAC091'} 
          containerStyle={this.state.crash ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={29} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="ride" onPressIn={() => {this.handlePlaySound('ride'); this.setState({
            ride: false
          }) }} onPressOut={()=>{this.setState({ ride: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.ride ? '#646464' : '#FAC091'} 
          containerStyle={this.state.ride? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={32} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="open-hihat"  onPressIn={() => {this.handlePlaySound('hihatOpen'); this.setState({
            hihatOpen: false
          }) }} onPressOut={()=>{this.setState({ hihatOpen: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.hihatOpen ? '#646464' : '#FAC091'} 
          containerStyle={this.state.hihatOpen ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={27} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="closed-hihat"  onPressIn={() => {this.handlePlaySound('hihatClosed'); this.setState({
            hihatClosed: false
          }) }} onPressOut={()=>{this.setState({ hihatClosed: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.hihatClosed ? '#646464' : '#FAC091'} 
          containerStyle={this.state.hihatClosed ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={30} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="bass"  onPressIn={() => {this.handlePlaySound('bassDrum'); this.setState({
            bassDrum: false
          }) }} onPressOut={()=>{this.setState({ bassDrum: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.bassDrum ? '#646464' : '#FAC091'} 
          containerStyle={this.state.bassDrum ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={28} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="snare"  onPressIn={() => {this.handlePlaySound('snare'); this.setState({
            snare: false
          }) }} onPressOut={()=>{this.setState({ snare: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.snare ? '#646464' : '#FAC091'} 
          containerStyle={this.state.snare ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={31} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>
          <Pressable id="clap"  onPressIn={() => {this.handlePlaySound('clap'); this.setState({
            clap: false
          }) }} onPressOut={()=>{this.setState({ clap: true})}} style={styles.pad707}>
          <InsetShadow shadowColor={this.state.clap ? '#646464' : '#FAC091'} 
          containerStyle={this.state.clap ? {backgroundColor: '#999A9C'} : {backgroundColor: '#F39E4E'}} 
          shadowRadius={27} shadowOpacity={1}>
            <View />
          </InsetShadow></Pressable>

          <LinearGradient
     
     colors={['#F39E4E', '#FAC091', '#FAC091', '#F39E4E']}
        locations={[0, .25, .75, 1]}
        start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '102%',
        height: deviceRatio > .69 ? 0 : '.5%',
      marginTop: '1%',
    }}
      /> 
        </View>
        <LinearGradient
     
     colors={['#F39E4E', '#FAC091', '#FAC091', '#F39E4E']}
        locations={[0, .25, .75, 1]}
        start={{ x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{width: '120%',
        height: deviceRatio < .69 ? 0 : '.5%',
    }}
      />

       
</LinearGradient>
      </View >
    )
  }
}

const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
this.fetchFonts = this.fetchFonts.bind(this);

  }

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true
    });
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }
 
  
  fetchFonts = () => {
    return Font.loadAsync({
      'electrolize': require('./assets/fonts/Electrolize-Regular.ttf'),
      'alumni-sans': require('./assets/fonts/AlumniSans-VariableFont_wght.ttf'),
      'questrial': require('./assets/fonts/Questrial-Regular.ttf')
    })
  }
  render()  {
    
if (!this.state.fontLoaded) {
  return (
    <AppLoading
    startAsync={this.fetchFonts}
    onFinish={()=> this.setState({
      fontLoaded: true
    })} onError={console.warn} />
  )
} 
    return (
<SafeAreaView style={{flex: 1, backgroundColor: '#323232'}}>
      <NavigationContainer >
        <Tab.Navigator>
          

          <Tab.Screen name="DP-606" component={SecondDrum} options={{
        tabBarIcon: ({ focused }) => (
         
          <Ionicons name="ios-apps-sharp" size={30} color={focused ? '#c04148' : "gray"}
          style={styles.icons, {marginBottom: 0, paddingBottom: 0, 
          }}/>  
        ),
        tabBarActiveTintColor: '#c04148',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#323232',
          borderTopWidth: .3,
          borderTopColor: '#595959',
          paddingBottom: 2,
              paddingTop: 2,
         },
        headerStyle: {
          backgroundColor: '#323232',
          //opacity: 1,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          //height: 80,
          borderBottomWidth: .4,
          borderBottomColor: '#6c6c6c',
        },
        headerTitleStyle: {
          color: '#c04148',
         
          borderColor: '#c04148',
          fontSize: 25,
          fontFamily: 'questrial',
          borderWidth: 2,
          
          borderRadius: 6,
          paddingRight: 2,
          paddingLeft: 3,
          //paddingBottom: 2,
          paddingTop: 0,
          height: 29,
          //width: 75,
          //marginTop:20,
          marginBottom: 0,

        },
          }} />
<Tab.Screen name="DP-707" component={FourthDrum} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="ios-apps-sharp" size={30} color={focused ? '#F39E4E' : "#808080"}
          style={styles.icons}/>  
        ),
        tabBarActiveTintColor: '#F39E4E',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: '#323232',
          borderTopWidth: .3,
          borderTopColor: '#595959',
          paddingBottom: 2,
              paddingTop: 2,
         },
        headerStyle: {
          backgroundColor: '#323232',
          //opacity: 1,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          //height: 80,
          borderBottomWidth: .4,
          borderBottomColor: '#595959',
        },
        headerTitleStyle: {
          color: '#F39E4E',
        
          borderColor: '#F39E4E',
          fontSize: 25,
          fontFamily: 'questrial',
          borderWidth: 2,
          
          borderRadius: 6,
          paddingRight: 2,
          paddingLeft: 3,
          //paddingBottom: 2,
          paddingTop: 0,
          height: 29,
          //width: 75,
          //marginTop:20,
          marginBottom: 0,
        },
          }} />
          <Tab.Screen name="DP-808" component={MainDrum} options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="ios-apps-sharp" size={30} color={focused ? "#f27a3f" : "#808080"} 
              style={styles.icons}/>  
            ),
         
            tabBarActiveTintColor: "#f27a3f",
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { 
              backgroundColor: '#323232',
              borderTopWidth: .3,
              borderTopColor: '#595959',
              paddingBottom: 2,
                  paddingTop: 2,
             },
            headerStyle: {
              backgroundColor: '#323232',
              //opacity: 1,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              //height: 80,
              borderBottomWidth: .4,
              borderBottomColor: '#6c6c6c',
            },
            headerTitleStyle: {
              borderColor: '#f27a3f',
              color: '#f27a3f',
              fontSize: 25,
              fontFamily: 'questrial',
              borderWidth: 2,
              
              borderRadius: 6,
              paddingRight: 2,
              paddingLeft: 3,
              //paddingBottom: 2,
              paddingTop: 0,
              height: 29,
              //width: 75,
              //marginTop:20,
              marginBottom: 0,

            },
         
           
          }} />
          <Tab.Screen name="DP-909" component={ThirdDrum} options={{
           tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-apps-sharp" size={30} color={focused ? "#f19757" : "#808080"}
            style={styles.icons}/>  
          ),
          tabBarActiveTintColor: "#f19757" ,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { 
            backgroundColor: '#323232',
            borderTopWidth: .3,
            borderTopColor: '#595959',
            paddingBottom: 2,
                paddingTop: 2,
           },
          headerStyle: {
            backgroundColor: '#323232',
            //opacity: 1,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            //height: 80,
            borderBottomWidth: .4,
            borderBottomColor: '#6c6c6c',
          },
          headerTitleStyle: {
            color: '#f19757',
           
            borderColor: '#f19757',
            fontSize: 25,
              fontFamily: 'questrial',
              borderWidth: 2,
              
              borderRadius: 6,
              paddingRight: 2,
              paddingLeft: 3,
              //paddingBottom: 2,
              paddingTop: 0,
              height: 29,
              //width: 75,
              //marginTop:20,
              marginBottom: 0,
          },
          }} />
        </Tab.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    );
        
  }
}

const styles = StyleSheet.create({

  container: {

   // flex: 1,
     //flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     //backgroundColor: '#41465a',
     alignContent: 'center',
     height: '100%',
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: (deviceRatio > .69 && deviceRatio < .74) ? '93%' :
    (deviceRatio >= .74 && deviceRatio < .75) ? '88%' : deviceRatio > .69 ? '87%' :'100%',
  height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: '1.5%',

  },
  title: {
    alignContent: 'center',
    aspectRatio: 1/1,
      width: '31.8%',
      //height: '31%',
      marginLeft: '1.5%',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: '1.5%',
  },

  icons: {
    //flex: 1,
    //paddingLeft: 2
    
  },

  container606: {

    // flex: 1,
     //flexDirection: 'column',
    alignItems: 'center',
     justifyContent: 'center',
     //backgroundColor: '#41465a',
     alignContent: 'center',
     height: '100%',
   
   },
   grid606: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: (deviceRatio > .69 && deviceRatio < .74) ? '93%' :
    (deviceRatio >= .74 && deviceRatio < .75) ? '88%' : deviceRatio > .69 ? '87%' :'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: '1.5%',
    
  },

  pad606: {
    alignContent: 'center',
  aspectRatio: 1/1,
    width: '31.8%',
    //height: '31%',
    marginLeft: '1.5%',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: '1.5%',
    
  },
 
  pad606wide: {
    //backgroundColor: 'blue',
   aspectRatio: 1/1,
    width: '48.4%',
    //height: 180,
    marginLeft: '1.5%',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: "1.5%",
  
  },
  container707: {
flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
     //backgroundColor: '#41465a',
     alignContent: 'center',
     height: '100%',
  },
  grid707: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: (deviceRatio > .69 && deviceRatio < .74) ? '93%' :
    (deviceRatio >= .74 && deviceRatio < .75) ? '88%' : deviceRatio > .69 ? '87%' :'100%',
  height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: '1.5%',
   
  },
  pad707: {
    alignContent: 'center',
    aspectRatio: 1/1,
      width: '31.8%',
      marginLeft: '1.5%',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: '1.5%',
    
  },
  container909: {

    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#41465a',
    alignContent: 'center',
    height: '100%',
  },
  grid909: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: (deviceRatio > .69 && deviceRatio < .74) ? '93%' :
    (deviceRatio >= .74 && deviceRatio < .75) ? '88%' : deviceRatio > .69 ? '87%' :'100%',
  height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: '1.5%',

  },
  pad909: {
    alignContent: 'center',
    aspectRatio: 1/1,
      width: '31.8%',
      //height: '31%',
      marginLeft: '1.5%',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: '1.5%',
  },

  pad909Wide: {
  
    aspectRatio: 3.1/1,
    width: '98.3%',
    //height: 180,
    marginLeft: '1.5%',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: "1.5%",
  },
  backgroundImage: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: "center",
    //position: 'absolute',
    width: '100%',
    height: 700,
    //zIndex: 2,
    alignContent: 'center',
    padding: 0,
    alignItems: 'center'
  }
});
