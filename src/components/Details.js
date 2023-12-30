import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SortCategories from "./SortCategories";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { API_KEY_ANIME_DB } from "@env";

export default function Details() {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://anime-db.p.rapidapi.com/anime",
          params: {
            page: "2",
            size: "50",
          },
          headers: {
            "X-RapidAPI-Key":
              API_KEY_ANIME_DB,
            "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setAnimeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();
  const [currentCategory, setCurrentCategory] = useState("Fantasy");

  const filteredData = animeData
    ? animeData.data.filter((item) => item.genres.includes(currentCategory))
    : [];

  return loading ? (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color="orange" />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.sortCategories}>
        <SortCategories
          activeCategory={currentCategory}
          setActiveCategory={setCurrentCategory}
        />
      </View>
      {filteredData.map((item, ind) => (
        <DetailsCard navigation={navigation} item={item} key={ind} />
      ))}
    </View>
  );
}

function DetailsCard({ navigation, item, ind }) {
  const [isFav, setIsFav] = useState(false);
  console.log(item.image);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { ...item, isFav })}
      style={styles.DetailsCard}
    >
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => setIsFav(!isFav)}
      >
        <AntDesign name="heart" size={20} color={isFav ? "red" : "white"} />
      </TouchableOpacity>

      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: 0,
  },
  DetailsCard: {
    justifyContent: "flex-end",
    position: "relative",
    padding: 16,
    paddingVertical: 24,
    gap: 5,
    marginBottom: 20,
    width: wp(44),
    height: wp(65),
  },
  avatar: {
    position: "absolute",
    width: wp(44),
    height: wp(65),
    borderRadius: 35,
  },
  heartIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    borderRadius: 50,
    padding: 12,
    backgroundColor: "black",
  },
  title: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "white",
  },
  sortCategories: {
    marginBottom: 20,
    width: wp(100),
    marginLeft: -15,
  },
});
