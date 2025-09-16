import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import { useBatteryListener } from "../hooks/useBatteryListener";
import { useAccelerometerListener } from "../hooks/useAccelerometerListener";

const ShakeToCharge = () => {
	// Get initial (read only) value of the battery level from device
	const batteryLevel = useBatteryListener();

	// State for simulating change to the UI when device is shaken
	const [shakeBatteryLevel, setShakeBatteryLevel] = useState<number | null>(null);

	// Ensure simulated battery level starts at initial value
	useEffect(() => {
    if (batteryLevel !== null) {
			setShakeBatteryLevel(batteryLevel);
		}
  }, [batteryLevel]);

	const data = useAccelerometerListener();

	useEffect(() => {
		const { x, y, z } = data;
		const magnitude = Math.sqrt(x * x + y * y + z * z);

		if (magnitude > 1.5) {
			setShakeBatteryLevel((prevBatteryLevel) => {
				if (prevBatteryLevel !== null) {
					return Math.min(prevBatteryLevel + 0.01, 1);
				} else {
					return prevBatteryLevel;
				}
			});
		}
	}, [data]);

	if (shakeBatteryLevel === null) {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Loading battery level...</Text>
			</SafeAreaView>
		);
	}

	let bgColor: String;

	if (shakeBatteryLevel < 0.2) {
		bgColor = "red";
	} else if (shakeBatteryLevel < 0.5) {
		bgColor = "yellow";
	} else {
		bgColor = "green";
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.battery}>
				<View
					style={{
						height: "100%",
						width: `${shakeBatteryLevel * 100}%`,
						backgroundColor: `${bgColor}`,
					}}
				>
					<View style={styles.dividerContainer}>
						<View style={styles.divider}></View>
						<View style={styles.divider}></View>
						<View style={styles.divider}></View>
						<View style={styles.divider}></View>
						<View style={styles.lastDivider}></View>
					</View>
				</View>
			</View>
			<Text style={styles.text}>
				Battery level: {(shakeBatteryLevel * 100).toFixed(0)}%
			</Text>
		</SafeAreaView>
	);
};

export default ShakeToCharge;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	battery: {
		width: 350,
		borderWidth: 1,
		borderColor: "black",
		height: 100,
		boxSizing: "border-box",
	},
	text: {
		fontSize: 20,
	},
	divider: {
		width: 70,
		height: "100%",
		borderRightWidth: 1,
		borderColor: "black",
		boxSizing: "border-box",
	},
	lastDivider: {
		width: 70,
		height: "100%",
		borderColor: "black",
		boxSizing: "border-box",
	},
	dividerContainer: {
		flexDirection: "row",
		height: "100%",
		width: 350,
		boxSizing: "border-box",
	},
});