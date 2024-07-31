import React from "react";
import ecto from "./Ectomorph.png";
import endo from "./Endomorph.png";
import meso from "./Mesomorph.png";
import prev from "./prev.png";
import next from "./next.png";
import armMuscle from "./bahumuscle.jpg";
import abdoMuscle from "./punggungmuscle.jpg"
import chestMuscle from "./chestMuscle.jpg"
export const DataImage = () => {
  return {
    ectomorph: ecto,
    endomorph: endo,
    mesomorph: meso,
    prev: prev,
    next: next,
    bahuMuscle:armMuscle,
    punggungMuscle: abdoMuscle,
    chestMuscle:chestMuscle,
  };
};
