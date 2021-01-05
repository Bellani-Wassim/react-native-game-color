import React, { useState , useEffect} from 'react';
import { TouchableOpacity, ImageBackground ,StyleSheet, Text, View } from 'react-native';

export default  App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(true)
  const [showHowTP, setShowHowTP] = useState(false) 
  const [showPlay, setShowPlay] = useState(false)
  const handleClickHowTP = () => {
    setShowHomeScreen(!showHomeScreen)
    setShowHowTP(!showHowTP)
  }
  const handleClickPlay = () => {
    setShowHomeScreen(!showHomeScreen)
    setShowPlay(!showPlay)
  }
  
  const handleClickReturn = () => {
    setShowHomeScreen(!showHomeScreen)
    setShowPlay(false)
    setShowHowTP(false)
  }

  const randomColorAdd = () => {
 
  }

  const handleClickColor = () => {

  }



  const Separator = () => (
    <View style={styles.separator} />
  );
  
  const HomeScreen = () => {
    return (
        <View >
          <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/homeScreen.png")} >
            <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.buttons} onPress={handleClickPlay}>
              <Text style={[styles.textButton,{fontSize: 18}]}>Play</Text>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity style={styles.buttons} onPress={handleClickHowTP}>
            <Text style={[styles.textButton,{fontSize: 16.5}]}>How to play</Text>
          </TouchableOpacity>
                   <Separator />
            </View>
          </ImageBackground>
        </View>
      );
  }

  
  const Play = () => {
    const [color, setColor] = useState({color0:"red",color1:"green",color2:"blue",color3:"yellow"})
    const [level, setLevel] = useState(1)
    const [time, setTime] = useState(0)
    const [tompo, setTompo] = useState(0)
    const [list, setList] = useState([])
    const [resetButton, setResetButton] = useState(false)
    
    const addNewColor=()=> {
        setList(list =>[ ...list, Math.floor(Math.random() * 4)])
        console.log('taille list dans le add random = '+list.length)
        console.log('lelement numero 1: '+list[0])
          return 0
      }

    const defaultColor = () => {
      setColor({color0:"red",color1:"green",color2:"blue",color3:"yellow"})
    }

    const unClearColor = () => {
      setColor({color0:"#FFBDBD",color1:"#C5FFA9",color2:"#B0DFFF",color3:"#F6FFB7"})
    }

    const Reset = () => {
      if (resetButton){ return (
        <TouchableOpacity style={{width:"20%",backgroundColor:"red",borderRadius: 40,left:"2%",top:"2%",height:"45%",top:"5%"}} >
        <Text style={[styles.textButton,{fontSize: 18}]}>reset</Text>
        </TouchableOpacity>
      )}else{return (<View></View>)}
    }

    const handleClickReset = () => {
      setLevel(1)
    }  

    const colorDisplay = (num=4) => {
              switch (num) {
        case 0:setColor({color0:"red",color1:"#C5FFA9",color2:"#B0DFFF",color3:"#F6FFB7"});break;
        case 1:setColor({color0:"#FFBDBD",color1:"green",color2:"#B0DFFF",color3:"#F6FFB7"});break;
        case 2:setColor({color0:"#FFBDBD",color1:"#C5FFA9",color2:"blue",color3:"#F6FFB7"});break;
        case 3:setColor({color0:"#FFBDBD",color1:"#C5FFA9",color2:"#B0DFFF",color3:"yellow"});break;
        default:console.log("default");break;}
    }

    const handleClickStart = () => {
      setResetButton(true)
      unClearColor()
      addNewColor()
      colorDisplay(list[0])
      console.log('taille list apres 1 er add random = '+list.length)
      // useEffect(() => {
      //   for (let i = 0; i < list.length; i++) { 
      //     console.log('lelement numero'+i+': '+list[i])
      //     // setTime(t => t + 500) 
      //     setTimeout(() => {colorDisplay(list[i])}, 500)
      //     // setTime(t => t + 140)
      //     setTimeout(() => {unClearColor()}, 750)
      //   }
      // }, [])

    }
    
  return (
  <View > 
    <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/screen.png")} >
            <View style={{flex:1.5,flexDirection:'row',top:"8%"}}>
            <TouchableOpacity style={{flex:1,width:"20%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} onPress={handleClickReturn}>
              <Text style={[styles.textButton,{fontSize: 18}]}>return</Text>
            </TouchableOpacity>
           <TouchableOpacity style={{flex:1,width:"20%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} onPress={handleClickStart}>
              <Text style={[styles.textButton,{fontSize: 18}]}>start level {level}</Text>
          </TouchableOpacity>
            </View> 
            <View style={{flex:3}}>
              <TouchableOpacity  style={{flex:1,flexDirection:'row'}}><TouchableOpacity  style={{flex:1,backgroundColor: color.color0}} onPress={() =>colorSelected(0)}></TouchableOpacity ><TouchableOpacity  style={{flex:1,backgroundColor: color.color1}} onPress={() =>colorSelected(1)}></TouchableOpacity ></TouchableOpacity >
              <TouchableOpacity  style={{flex:1,flexDirection:'row'}}><TouchableOpacity  style={{flex:1,backgroundColor: color.color2}} onPress={() =>colorSelected(2)}></TouchableOpacity ><TouchableOpacity  style={{flex:1,backgroundColor: color.color3}} onPress={() =>colorSelected(3)}></TouchableOpacity></TouchableOpacity >
            </View>
            <View style={{flex:1.5}}>
            <Reset />
            </View>
            </ImageBackground>
  </View>
  )
  }
  
  const HowToPlay = () => {
    return (
      <View >
          <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/screen.png")} >
            <View style={{flex:1,top:"5%"}}>
            <TouchableOpacity style={[styles.buttons,{height:"40%"}]} onPress={handleClickReturn}>
            <Text style={[styles.textButton,{fontSize: 18}]}>return</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:4}}>
              <Text style={[styles.textButton,{top:"20%"}]}>you have to follow the collor's order.  for exemple : if the first color to show up is blue
              the second is green and the third is red .you just have to click on the blue box after that the
              green box and the red one.
              good luck !</Text>
            </View>
          </ImageBackground>
        </View>
    )
  }
  
  return (
    (showHomeScreen&&<HomeScreen />)||
    (showHowTP&&<HowToPlay />)||
    (showPlay&&<Play />)
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttons: {
    width : "50%",
    height : "10%",
    backgroundColor:"#092BC6",
    borderRadius: 40,
    },
  buttonsView: {
    flex : 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textButton:{
     top: "25%",
     color: 'white',
      textAlign: 'center' ,
      fontWeight: 'bold',
  },
  separator: {
    marginVertical: "8.5%",
  },
});
