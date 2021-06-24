import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./App/Screens/HomeScreen";
import SignInScreen from "./App/Screens/SigninScreen";
import LoginScreen from "./App/Screens/LoginScreen";
import ResultsScreen from "./App/Screens/Results";
import Detect from "./App/Screens/Detect";
import PastResults from "./App/Screens/PastResults";
import SignUpScreen from "./App/Screens/SignupScreen";

const TabNavigator = createMaterialBottomTabNavigator(
	// Different screen navigations
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: "Home",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"home-outline"}
						/>
					</View>
				),
			},
		},
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				tabBarLabel: "Login",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"log-in-outline"}
						/>
					</View>
				),
			},
		},
		Results: {
			screen: ResultsScreen,
			navigationOptions: {
				tabBarLabel: "Results",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"results-outline"}
						/>
					</View>
				),
			},
		},
		Detect: {
			screen: Detect,
			navigationOptions: {
				tabBarLabel: "Detect",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"detect-outline"}
						/>
					</View>
				),
			},
		},
		PastResults: {
			screen: PastResults,
			navigationOptions: {
				tabBarLabel: "Past Results",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"past-results-outline"}
						/>
					</View>
				),
			},
		},
		SignInScreen: {
			screen: SignInScreen,
			navigationOptions: {
				tabBarLabel: "Sign in screen",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"sign-in-screen-outline"}
						/>
					</View>
				),
			},
		},
		SignUpScreen: {
			screen: SignUpScreen,
			navigationOptions: {
				tabBarLabel: "Sign in screen",
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Icon
							style={[{ color: tintColor }]}
							size={25}
							name={"sign-in-screen-outline"}
						/>
					</View>
				),
			},
		},
	},
	// Styles of bottom tab navigator
	{
		initialRouteName: "Home",
		activeColor: "#0000ff",
		inactiveColor: "#d6efff",
		barStyle: { backgroundColor: "#42adf5" },
	}
);

export default createAppContainer(TabNavigator);
