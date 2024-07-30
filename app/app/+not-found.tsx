import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function NotFoundScreen() {
	return (
		<>
			<View style={styles.container}>
				<Text>Hello NOT FOUND!</Text>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});
