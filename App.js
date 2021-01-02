import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, Pressable ,StyleSheet, Text, View } from 'react-native';

export default  App = () => {
  const [showHomeScreen, setShowHomeScreen] = useState(true)
  const [showHowTP, setShowHowTP] = useState(false) 
  const [showPlay, setShowPlay] = useState(false)
  const [level, setLevel] = useState(1)
  const [colorList,setColorList] = useState([])
  const [color, setColor] = useState()
  consr [index, setIndex] = useState(4)
  const handleClickHowTP = () => {
    setShowHomeScreen(!showHomeScreen)
    setShowHowTP(!showHowTP)
  }
  const handleClickPlay = () => {
    setColor({color0:"red",color1:"green",color2:"blue",color3:"yellow"})
    setShowHomeScreen(!showHomeScreen)
    setShowPlay(!showPlay)
  }
  
  const handleClickReturn = () => {
    setShowHomeScreen(!showHomeScreen)
    setShowPlay(false)
    setShowHowTP(false)
  }

  const handleClickRestart = () => {
    setLevel(1)
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
    // const useEffect(() => {
    //   effect
    //   return () => {
    //     cleanup
    //   }
    // }, [input])

    // const defaultColor = () => {

    //   let colorName = "color" + index
  
    //   console.log(colorName)
  
    //   switch (index) {
    //     case 0:setColor({color0:"#FFBDBD",color1:"green",color2:"blue",color3:"yellow"});break;
    //     case 1:setColor({color0:"red",color1:"#C5FFA9",color2:"blue",color3:"yellow"});break;
    //     case 2:setColor({color0:"red",color1:"green",color2:"#B0DFFF",color3:"yellow"});break;
    //     case 3:setColor({color0:"red",color1:"green",color2:"blue",color3:"#F6FFB7"});break;
    //     default:
    //       console.log("default")
    //       break;
    //   }
    // setColor({color0:"#FFBDBD",color1:"#C5FFA9",color2:"#B0DFFF",color3:"#F6FFB7"})
    }
  return (
  <View >
    <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/screen.png")} >
            <View style={{flex:1,flexDirection:'row',top:"8%"}}>
            <TouchableOpacity style={{flex:1,width:"30%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} onPress={handleClickReturn}>
            <Text style={[styles.textButton,{fontSize: 18}]}>return</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,width:"30%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} >
            <Text style={[styles.textButton,{fontSize: 18}]}>Restart</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:2,backgroundColor: 'green'}}>
            <TouchableOpacity style={[styles.buttons,{height:"30%"}]} onPress={handleClickRestart}>
              <Text style={[styles.textButton,{fontSize: 18}]}>next level {level}</Text>
          </TouchableOpacity>
            </View>
            <View style={{flex:3}}>
              <Pressable  style={{flex:1,flexDirection:'row'}}><Pressable  style={{flex:1,backgroundColor: color.color0}} onPress={setIndex(0)}></Pressable ><Pressable  style={{flex:1,backgroundColor: color.color1}} onPress={setIndex(1)}></Pressable ></Pressable >
              <Pressable  style={{flex:1,flexDirection:'row'}}><Pressable  ew style={{flex:1,backgroundColor: color.color2}} onPress={setIndex(2)}></Pressable ><Pressable  ew style={{flex:1,backgroundColor: color.color3}} onPress={setIndex(3)}></Pressable></Pressable >
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
     top: "20%",
     color: 'white',
      textAlign: 'center' ,
      fontWeight: 'bold',
  },
  separator: {
    marginVertical: "8.5%",
  },
});
