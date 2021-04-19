import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";

import styles from "./assets/styles";
import HowToPlay from "./screens/HowToPlay";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showHowTP, setShowHowTP] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  const handleClickReturn = () => {
    setShowHomeScreen(!showHomeScreen);
    setShowPlay(false);
    setShowHowTP(false);
  };

  const Play = () => {
    const [color, setColor] = useState({
      color0: "#FFE2E2",
      color1: "#C5FFA9",
      color2: "#B0DFFF",
      color3: "#F9FAED",
    });
    const [level, setLevel] = useState(1);
    const [list, setList] = useState([]);
    const [image, setImage] = useState(require("./assets/images/dumb/1.jpg"));
    const [selectedList, setSelectedList] = useState([]);
    const [passNextLvl, setPassNextLvl] = useState(2);
    const [nextLevel, setNextLevel] = useState(true);
    const [resetButton, setResetButton] = useState(false);

    let imgPath = [
      require("./assets/images/dumb/1.jpg"),
      require("./assets/images/dumb/1.jpg"),
      require("./assets/images/dumb/2.jpg"),
      require("./assets/images/dumb/3.jpg"),
      require("./assets/images/dumb/4.jpg"),
      require("./assets/images/dumb/5.jpg"),
      require("./assets/images/dumb/6.jpg"),
      require("./assets/images/dumb/7.jpg"),
      require("./assets/images/dumb/8.jpg"),
      require("./assets/images/dumb/9.jpg"),
      require("./assets/images/dumb/10.jpg"),
      require("./assets/images/dumb/11.jpg"),
      require("./assets/images/dumb/12.jpg"),
      require("./assets/images/dumb/13.jpg"),
      require("./assets/images/dumb/14.jpg"),
    ];

    let loserImage = [
      require("./assets/images/loser/0.png"),
      require("./assets/images/loser/1.png"),
      require("./assets/images/loser/2.png"),
      require("./assets/images/loser/3.png"),
      require("./assets/images/loser/4.png"),
      require("./assets/images/loser/5.png"),
      require("./assets/images/loser/6.png"),
      require("./assets/images/loser/7.png"),
      require("./assets/images/loser/8.png"),
      require("./assets/images/loser/9.png"),
      require("./assets/images/loser/10.png"),
    ];

    let trueFalse = [
      require("./assets/images/false.png"),
      require("./assets/images/correct.png"),
      require("./assets/images/screen.png"),
    ];

    useEffect(() => {
      if (!nextLevel) {
        let t = 0;
        for (let i = 0; i < list.length; i++) {
          t = t + 500;
          setTimeout(() => {
            colorDisplay(list[i]);
          }, t);
          t = t + 300;
          setTimeout(() => {
            unClearColor();
          }, t);
        }
      }
    }, [list]);

    useEffect(() => {
      if (!passNextLvl)
        setSelectedList([]);
    }, [passNextLvl]);

    useEffect(() => {
      if (passNextLvl == 1) {
        setList([]);
        for (let i = 0; i < level; i++) 
          addNewRandomColor();
      }
    }, [passNextLvl]);

    useEffect(() => {
      if (selectedList.length == list.length && !list.length == 0) {
        for (let i = 0; i < list.length; i++)
          if (selectedList[i] != list[i])
            setPassNextLvl(0);

        const index = list.length -1
        const tompo = selectedList[index] == list[index]

        setNextLevel(tompo);
        
        if (tompo) {
          setLevel((l) => (l += 1));
          setPassNextLvl(1);
        }
      }
    }, [selectedList.length]);

    useEffect(() => {
      setSelectedList([]);
    }, [nextLevel]);

    useEffect(() => {
      if (nextLevel && passNextLvl) {
        if (level < 14)
          setImage(imgPath[level]);

        else
          setImage(imgPath[14]);
      }
      else if (!passNextLvl)
        setImage(loserImage[Math.floor(Math.random() * 11)]);
    }, [level, nextLevel, passNextLvl]);

    const addNewRandomColor = () => setList((list) => [...list, Math.floor(Math.random() * 4)]);

    const addSelectedColor = (num) => setSelectedList([...selectedList, num]);

    const unClearColor = () => {
      setColor({
        color0: "#FFE2E2",
        color1: "#C5FFA9",
        color2: "#B0DFFF",
        color3: "#F9FAED",
      });
    };

    const Reset = () => 
      resetButton ?
        <TouchableOpacity
          style={{
            width: "75%",
            backgroundColor: "red",
            borderRadius: 40,
            left: "2%",
            height: "45%",
            top: "5%",
          }}
          onPress={handleClickReset}
        >
          <Text style={[styles.textButton, { fontSize: 18 }]}>reset</Text>
        </TouchableOpacity>
      :
        <Text style={{ color: "white", left: "4%" }}>
          level 0 !{"\n"}this is you :({"\n"}finish level 1{"\n"}and your
          picture{"\n"}will upgrade
        </Text>

    const handleClickReset = () => {
      setImage(imgPath[1]);
      setNextLevel(true);
      setSelectedList([]);
      setList([]);
      setLevel(1);
      setPassNextLvl(2);
    };

    const colorDisplay = (num = 4) => {
      switch (num) {
        case 0:
          setColor({
            color0: "red",
            color1: "#C5FFA9",
            color2: "#B0DFFF",
            color3: "#F9FAED",
          });
          break;
        case 1:
          setColor({
            color0: "#FFE2E2",
            color1: "green",
            color2: "#B0DFFF",
            color3: "#F9FAED",
          });
          break;
        case 2:
          setColor({
            color0: "#FFE2E2",
            color1: "#C5FFA9",
            color2: "blue",
            color3: "#F9FAED",
          });
          break;
        case 3:
          setColor({
            color0: "#FFE2E2",
            color1: "#C5FFA9",
            color2: "#B0DFFF",
            color3: "orange",
          });
          break;
      }
    };

    const useHandleClickStart = () => {
      if (nextLevel) {
        addNewRandomColor();
      } else {
        setList((list) => [...list]);
        setSelectedList([]);
      }
      setNextLevel(false);
      setResetButton(true);
      unClearColor();
      setPassNextLvl(2);
    };

    const TrueFalse = () => 
        <Image
          source={trueFalse[passNextLvl].toString()}
          style={{ width: "100%", height: "100%", right: "5%", aspectRatio: 1 }}
        />

    const Wojaks = () => 
        <Image
          source={image.toString()}
          style={{ width: "100%", height: "100%", right: "0%", aspectRatio: 1 }}
        />

    const ButtonNextLevel = () => 
      nextLevel ?
        <Text style={[styles.textButton, { fontSize: 18 }]}>start level {level}</Text>
        :
        <Text style={[styles.textButton, { fontSize: 18 }]}>restart</Text>


    return (
      <SafeAreaView style={{ backgroundColor: "#15133C", flex: 1 }}>
        <StatusBar
          style={{ backgroundColor: "blue", barstyle: "light-content" }}
          hidden={true}
        />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("./assets/images/screen.png")}
        >
          <View style={{ flex: 1, flexDirection: "row", top: "8%" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "20%",
                backgroundColor: "#092BC6",
                borderRadius: 40,
                height: "45%",
              }}
              onPress={handleClickReturn}
            >
              <Text style={[styles.textButton, { fontSize: 18 }]}>return</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
                width: "20%",
                height: "45%",
              }}
            >
              <TrueFalse />
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                width: "20%",
                backgroundColor: "#092BC6",
                borderRadius: 40,
                height: "45%",
              }}
              onPress={useHandleClickStart}
            >
              <ButtonNextLevel />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 3 }}>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: color.color0 }}
                onPress={() => addSelectedColor(0)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: color.color1 }}
                onPress={() => addSelectedColor(1)}
              ></TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: color.color2 }}
                onPress={() => addSelectedColor(2)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: color.color3 }}
                onPress={() => addSelectedColor(3)}
              ></TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1.5, flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <Reset />
            </View>
            <View style={{ flex: 0.75 }}>
              <Wojaks />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  };

  return (
    (showHomeScreen && <HomeScreen 
      handleClickPlay={() => {
        setShowHomeScreen(!showHomeScreen);
        setShowPlay(!showPlay);
      }}
      handleClickHowTP={() => {
        setShowHomeScreen(!showHomeScreen);
        setShowHowTP(!showHowTP);
      }}
    />) ||
    (showHowTP && <HowToPlay handleClickReturn={() => handleClickReturn()} />) ||
    (showPlay && <Play />)
  );
}