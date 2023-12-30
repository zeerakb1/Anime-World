import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

export default function DetailsScreen({ route }) {
  const item = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.Image}
        resizeMode="cover"
      />
      <StatusBar style="light" />

      <SafeAreaView
        style={styles.navigationIcons}
        contentContainerStyle={{ marginTop: 40 }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backView}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favouriteView}
        >
          <View>
            <AntDesign
              name="heart"
              size={24}
              color={item.isFav ? "red" : "white"}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        style={styles.descriptionView}
        contentContainerStyle={{
          gap: 20,
        }}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.genre}>
            {item.genres.map((genre, ind) => (
              <Text style={{color: "#ff8c00"}} key={ind}>
                {genre}{"  "}
              </Text>
            ))}
          </View>
        </View>

        <Text style={styles.description}>
          {item?.synopsis.split("[Written by MAL Rewrite]")[0]}
        </Text>

        <View style={styles.detailsView}>
          <View style={styles.durationView}>
            <FontAwesome name="th-list" size={24} color="orange" />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.episodes}</Text>
              <Text style={styles.detailsParagraph}>Episodes</Text>
            </View>
          </View>

          <View style={styles.durationView}>
            <Ionicons name="checkmark-circle-sharp" size={28} color="orange" />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.status}</Text>
              <Text style={styles.detailsParagraph}>Completed</Text>
            </View>
          </View>

          <View style={styles.durationView}>
            <MaterialCommunityIcons name="podium" size={24} color="orange" />
            <View style={styles.titleDetails}>
              <Text style={styles.detailsHeading}>{item.ranking}</Text>
              <Text style={styles.detailsParagraph}>Ranking</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Image: {
    width: wp(100),
    height: hp(55),
  },
  navigationIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(100),
    position: "absolute",
    top: 40,
  },
  backView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginLeft: 16,
  },
  favouriteView: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
    marginRight: 16,
  },
  descriptionView: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    marginTop: -56,
    
  },
  titleView: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignSelf: "stretch",
    paddingBottom: 10,
    // marginVertical: 10, // Space above and below the line
  },
  title: {
    fontSize: wp(6),
    fontWeight: "bold",
    color: "#000",
  },
  genre: {
    flexDirection: "row",
    justifyContent: "start",
  },
  description: {
    fontSize: wp(3.2),
    letterSpacing: 0.25,
    // marginBottom: -30,
  },
  detailsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 4,
    marginTop: -10,
    marginBottom: 50,
  },
  durationView: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleDetails: {
    padingTop: 4,
    alignItems: "center",
    gap: 4,
  },
  detailsHeading: {
    fontSize: wp(4.5),
    fontWeight: "bold",
  },
  detailsParagraph: {
    letterSpacing: 0.5,
    color: "#A0A0A0",
  },
  activeRed: {
    color: "red",
  },
});
