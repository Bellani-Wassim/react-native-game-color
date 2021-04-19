import React from "react";

import styles from "../assets/styles";

export default function HowToPlay({handleClickReturn})
{
	return (
		<SafeAreaView style={{ backgroundColor: "#15133C", flex: 1 }}>
			<StatusBar
				style={{ backgroundColor: "blue", barstyle: "light-content" }}
				hidden={true}
			/>
			<View style={{ flex: 1, top: "5%" }}>
				<TouchableOpacity
					style={[styles.buttons, { height: "40%" }]}
					onPress={() => handleClickReturn()}
				>
					<Text style={[styles.textButton, { fontSize: 18 }]}>return</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 4 }}>
				<Text style={[styles.textButton, { top: "20%" }]}>
					you have to follow the collor's order. for exemple : if the first
					color to show up is blue the second is green and the third is red
					.you just have to click on the blue box after that the green box and
					the red one.{"\n"}
					good luck !
				</Text>
			</View>
		</SafeAreaView>
	);
}