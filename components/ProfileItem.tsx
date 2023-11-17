import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { ProfileItemT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name,
}: ProfileItemT) => (
  <View style={styles.containerProfileItem}>
    <Text style={styles.name}>Jet Jadeja</Text>

    <Text style={styles.descriptionProfileItem}>Santa Monica, CA</Text>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Ionicons name="person" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Car Enthusiast & DJ</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Entypo name="time-slot" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Auto Gear Reviews & DJ Tutorials</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="airplane" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>Adventures & Life Vlogger</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="calendar" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info4}</Text>
    </View>
  </View>
);

export default ProfileItem;
