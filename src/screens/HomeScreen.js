import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
  import { AntDesign } from "@expo/vector-icons";
  import Categories from "../components/Categories";
  import SortCategories from "../components/SortCategories";
  import Details from "../components/Details";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        <View style={styles.avatarMain}>
          <Text style={styles.avatarTitle}>Explore Anime</Text>
          <TouchableOpacity>
            <Image source={require("../../assets/images/icon.webp")} style={styles.avatarImage}/>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <View style={styles.searchBarMain}>
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput
              placeholder="Search Anime"
              placeholderTextColor={"gray"}
              style={styles.searchBarText}
            />
          </View>
        </View>

        <View style={styles.categories}>
          <Categories />
        </View>

        <View>
          <Details />
        </View> 

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#838996",
  },
  avatarMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  avatarTitle: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#000",
  },
  avatarImage: {
    height: wp(12),
    width: wp(12),
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarMain: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    padding: 16,
    paddingLeft: 24,
    gap: 5,
  },
  searchBarText: {
    flex: 1,
    fontSize: wp(4),
    marginBottom: 4,
    paddingLeft: 4,
    letterSpacing: 0.5,
  },
  categories: {
    marginBottom: 20,
  },
  sortCategories: {
    marginBottom: 20,
  },
});
