import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";
import ProfilePicture from "../assets/images/JetJadeja.jpg";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

export const YOUTUBE_COLOR = "#FF0000";
export const TIKTOK_COLOR = "#000000";
export const INSTAGRAM_COLOR = "#d62976";
export const SPOTIFY_COLOR = "#1DB954";
export const PINTEREST_COLOR = "#BD081C";
export const TWITTER_COLOR = "#1DA1F2";

const Profile = () => {
  const { age, image, info1, info2, info3, info4, location, match, name } =
    DEMO[6];

  return (
    <View style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={ProfilePicture} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              height: 50,
              width: 120,
              borderRadius: 25,
              backgroundColor: YOUTUBE_COLOR,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                marginRight: 3,
              }}
            >
              <AntDesign name="youtube" size={20} color={WHITE} />
            </View>
            <Text style={styles.textButton}>YouTube</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              height: 50,
              width: 120,
              borderRadius: 25,
              backgroundColor: INSTAGRAM_COLOR,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                marginRight: 3,
              }}
            >
              <FontAwesome5 name="instagram" size={20} color={WHITE} />
            </View>
            <Text style={styles.textButton}>Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              height: 50,
              width: 120,
              borderRadius: 25,
              backgroundColor: SPOTIFY_COLOR,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                marginRight: 3,
              }}
            >
              <Entypo name="spotify" size={20} color={WHITE} />
            </View>
            <Text style={styles.textButton}>Spotify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
