import { DataT } from "../../types";

import RICHARD_1 from "../images/01_0.jpg";
import RICHARD_2 from "../images/01_1.jpg";
import RICHARD_3 from "../images/01_2.jpg";
import RICHARD_4 from "../images/01_3.gif";

import RION_1 from "../images/02_0.jpg";
import RION_2 from "../images/02_1.gif";
import RION_3 from "../images/02_2.jpg";

import LILAH_1 from "../images/03_0.jpg";
import LILAH_2 from "../images/03_1.gif";
import LILAH_3 from "../images/03_2.jpg";

import BELLA_1 from "../images/04_0.jpg";
import BELLA_2 from "../images/04_1.gif";

import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Richard Zheng",
    isOnline: true,
    match: "96",
    description:
      "16 Year Old Photographer. Full-time Traveller. Globe Trotter. Teaches kids Photography.",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: RICHARD_1,
    images: [RICHARD_1, RICHARD_4, RICHARD_2, RICHARD_3],
  },
  {
    id: 2,
    name: "Lilah Segundo",
    match: "76",
    description:
      "indy artist and passion ukulele player. \n 'in the jungle' out now",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: LILAH_1,
    images: [LILAH_1, LILAH_2, LILAH_3],
  },
  {
    id: 3,
    name: "Rion Doris",
    match: "76",
    description:
      "Passionate about elevating performance, leadership and consciousness to accelerate innovation and build a better world.",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: RION_1,
    images: [RION_1, RION_2, RION_3],
  },
  {
    id: 4,
    name: "John Lebsack",
    match: "23",
    description:
      "Avid Gamer and Streamer. Love to play Valorant, League of Legends, and TFT!",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: BELLA_1,
    images: [BELLA_1, BELLA_2],
  },
  {
    id: 5,
    name: "James Dietrich",
    match: "76",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
    images: [IMAGE_05],
  },
  {
    id: 6,
    name: "Patricia Schulist",
    match: "95",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
    images: [RICHARD_1],
  },
  {
    id: 7,
    name: "Chelsey Weissnat",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
    images: [RICHARD_1],
  },
  {
    id: 8,
    name: "Nicky Runol",
    match: "85",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
    images: [RICHARD_1],
  },
  {
    id: 9,
    name: "Glenna Reichert",
    match: "74",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
    images: [RICHARD_1],
  },
  {
    id: 10,
    name: "Kurtis DuBuque",
    match: "98",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
    images: [RICHARD_1],
  },
];

export default data;
