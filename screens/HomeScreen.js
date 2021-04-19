import React from "react";

import styles from "../assets/styles";

export default function HomeScreen({handleClickPlay, handleClickHowTP})
{
	return (
		<SafeAreaView style={{ backgroundColor: "#15133C", flex: 1 }}>
      <StatusBar
        style={{ backgroundColor: "blue", barstyle: "light-content" }}
        hidden={true}
      />
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/HomeScreen.png")}
      >
        <View style={styles.buttonsView}>
          <TouchableOpacity style={styles.buttons} onPress={() => handleClickPlay()}>
            <Text style={[styles.textButton, { fontSize: 18 }]}>Play</Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.buttons} onPress={() => handleClickHowTP()}>
            <Text style={[styles.textButton, { fontSize: 16.5 }]}>
              How to play
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

        </View>
      </ImageBackground>
    </SafeAreaView>
	);
} 