import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const City = () => (
  <TouchableOpacity style={styles.city}>
    <Text style={styles.cityText}>
      <Icon name="location-sharp" size={13} color={WHITE} /> All Platforms
    </Text>
  </TouchableOpacity>
);

export default City;
