import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const Filters = () => (
  <TouchableOpacity style={styles.filters}>
    <Text style={styles.filtersText}>
      <Icon name="filter" size={13} color={WHITE} /> Filters
    </Text>
  </TouchableOpacity>
);

export default Filters;
