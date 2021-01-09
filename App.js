import React, { useState , useEffect} from 'react';
import { TouchableOpacity, ImageBackground ,StyleSheet,Image, Text, View } from 'react-native';

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
    const [level, setLevel] = useState(0)
    const [list, setList] = useState([])
    const [image, setImage] = useState("./assets/dumb/1.jpg")
    const [selectedList, setSelectedList] = useState([])
    const [restart, setRestart] = useState(false)
    const [nextLevel, setNextLevel] = useState(true)
    const [resetButton, setResetButton] = useState(false)

    let imgPath = [
      require("./assets/dumb/0.jpg"),
      require("./assets/dumb/1.jpg"),
      require("./assets/dumb/2.jpg"),
      require("./assets/dumb/3.jpg"),
      require("./assets/dumb/4.jpg"),
      require("./assets/dumb/5.jpg"),
      require("./assets/dumb/6.jpg"),
      require("./assets/dumb/7.jpg"),
      require("./assets/dumb/8.jpg"),
      require("./assets/dumb/9.jpg"),
      require("./assets/dumb/10.jpg"),
      require("./assets/dumb/11.jpg"),
      require("./assets/dumb/12.jpg"),
    ]
    
    useEffect(() => {
      let t =0
      for (let i = 0; i < list.length; i++) {
        t = t + 500
        setTimeout(() => {colorDisplay(list[i])}, t)
        t = t + 300
        setTimeout(() => {unClearColor()}, t)
      }
    }, [list])

    useEffect(() => {
      if((selectedList.length==list.length)){
        let tompo = true
        for (let i = 0; i < list.length; i++) {
           if (selectedList[i] != list[i]) { 
               tompo=false   
               setSelectedList([])
               setRestart(true)
            }           
        }       
        setNextLevel(tompo)
        if(tompo){
          setLevel(l => l+=1)
          setRestart(false)}
      }
    }, [selectedList.length])

    useEffect(() => {
        setSelectedList([])
    }, [nextLevel])

    useEffect(() => {
      if (level<12) {setImage(imgPath[level])}
      else{setImage(12)}
    }, [level])

    const addNewRandomColor=()=> {
        setList(list =>[...list, Math.floor(Math.random() * 4)])
          return 0
      }

    const addSelectedColor=(num)=> {
      setSelectedList(selectedList =>[...selectedList, num])
        return 0
      }

    const defaultColor = () => {
      setColor({color0:"red",color1:"green",color2:"blue",color3:"yellow"})
    }

    const unClearColor = () => {
      setColor({color0:"#FFE2E2",color1:"#C5FFA9",color2:"#B0DFFF",color3:"#F9FAED"})
    }

    const Reset = () => {
      if (resetButton){ return (
        <TouchableOpacity style={{width:"20%",backgroundColor:"red",borderRadius: 40,left:"2%",top:"2%",height:"45%",top:"5%"}} onPress={handleClickReset}>
        <Text style={[styles.textButton,{fontSize: 18}]}>reset</Text>
        </TouchableOpacity> 
      )}else{return (<View></View>)}
    }

    const handleClickReset = () => {
      setNextLevel(true)
      setSelectedList([])
      setList([])
      setRestart(false) 
      setLevel(1)
    }  

    const colorDisplay = (num=4) => {
        switch (num) {
        case 0:setColor({color0:"red",color1:"#C5FFA9",color2:"#B0DFFF",color3:"#F9FAED"});break;
        case 1:setColor({color0:"#FFE2E2",color1:"green",color2:"#B0DFFF",color3:"#F9FAED"});break;
        case 2:setColor({color0:"#FFE2E2",color1:"#C5FFA9",color2:"blue",color3:"#F9FAED"});break;
        case 3:setColor({color0:"#FFE2E2",color1:"#C5FFA9",color2:"#B0DFFF",color3:"yellow"});break;
        default:console.log("default");break;}
    }

    const useHandleClickStart = () => {
      if(nextLevel){addNewRandomColor()}
      else{setList(list=>[...list])}
      setNextLevel(false)
      setResetButton(true)
      unClearColor()
    }

    const Wojaks = () => {
      if(resetButton){
        return(<Image style={{resizeMode:"repeat"}} source={image} />)
    }else{return (<View></View>)}}

   const ButtonNextLevel = () => {
    if (nextLevel){ return (
    <Text style={[styles.textButton,{fontSize: 18}]}>next level {level}</Text>)}else{return (<Text style={[styles.textButton,{fontSize: 18}]}>restart</Text>)}
    }
    
  return (
  <View > 
    <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/screen.png")} >
            <View style={{flex:1.5,flexDirection:'row',top:"8%"}}>
            <TouchableOpacity style={{flex:1,width:"20%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} onPress={handleClickReturn}>
              <Text style={[styles.textButton,{fontSize: 18}]}>return</Text>
            </TouchableOpacity>
           <TouchableOpacity style={{flex:1,width:"20%",backgroundColor:"#092BC6",borderRadius: 40,height:"45%"}} onPress={useHandleClickStart}>
              <ButtonNextLevel />
          </TouchableOpacity>
            </View> 
            <View style={{flex:3}}>
              <TouchableOpacity  style={{flex:1,flexDirection:'row'}}><TouchableOpacity  style={{flex:1,backgroundColor: color.color0}} onPress={() => addSelectedColor(0)}></TouchableOpacity ><TouchableOpacity  style={{flex:1,backgroundColor: color.color1}} onPress={() => addSelectedColor(1)}></TouchableOpacity ></TouchableOpacity >
              <TouchableOpacity  style={{flex:1,flexDirection:'row'}}><TouchableOpacity  style={{flex:1,backgroundColor: color.color2}} onPress={() => addSelectedColor(2)}></TouchableOpacity ><TouchableOpacity  style={{flex:1,backgroundColor: color.color3}} onPress={() => addSelectedColor(3)}></TouchableOpacity></TouchableOpacity >
            </View>
            <View style={{flex:1.5,flexDirection:'row'}}>
            <Reset style={{flex:1}}/>
            <Wojaks style={{flex:1.5}}/>
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
