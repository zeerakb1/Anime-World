import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";



export default function WelcomeScreen() {
    const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/satt.jpg")}
        style={styles.imageView}
      />

      <View style={styles.gradientView}>
        <LinearGradient
          colors={["transparent", "rgba(3, 105, 161, 0.8)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientLinear}
        />
        <View style={{
            gap: 10
        }}>
          <Text style={styles.MainTitle}>Anime World</Text>
          <Text style={styles.welcomeDescription}>Get the latest list of top anime!</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>
                Explore!
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageView: {
    height: hp(100),
    width: wp(100),
    position: "absolute",
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: hp(100),
    width: wp(100),
    alignSelf: "center",
  },
  gradientView: {
    padding: 20,
    paddingBottom: 40,
    gap: 32,
  },
  MainTitle: {
    fontSize: wp(10),
    fontStyle: "italic",
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "bold",
    lineHeight: wp(12),
  },
  welcomeDescription: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "#838996",
  },
  exploreButton: {
    borderRadius: 50,
    backgroundColor: "blue",
    paddingHorizontal: 48,
    padding: 12,
    alignSelf: "center",
  },
  exploreButtonText: {
    fontSize: wp(5.5),
    fontWeight: "bold",
    color: "white",
  },
});
