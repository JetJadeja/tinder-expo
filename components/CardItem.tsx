import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import styles, {
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from "../assets/styles";

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  images,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: fullWidth - 80,
      height: 350,
      margin: 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: 15,
      paddingBottom: 7,
      color: WHITE,
      fontSize: 30,
    },
  ];

  const scrollViewStyle = {
    height: 400, // Fixed height for ScrollView
  };

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE SCROLLVIEW */}
      <ScrollView
        style={scrollViewStyle}
        vertical={true}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true} // This should snap to each image
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={imageStyle}
            resizeMode="cover" // This will ensure images are cropped and maintain aspect ratio
          />
        ))}
      </ScrollView>

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>
          {/* Other content you may have in the middle, if any */}
          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
