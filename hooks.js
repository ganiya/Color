import { useState, useEffect } from "react";
import { generate } from "shortid";
import {AsyncStorage} from "react-native";
//asynstorage stores the colors data locally so whenever the app refreshes, 
//the previously inputted colors are still there. Note to myself: use this for the to do list app

export const useColors = () => {
  const [colors, setColors] = useState([]);

  const loadColors = async () => {
      const colorData = await AsyncStorage.getItem("@ColorListStore:Colors");
      if (colorData) {
        const colors = JSON.parse(colorData);
        setColors(colors);
      }
  }
  //Load Colors
  useEffect(() => {
  if (colors.length) return;
  loadColors();
}, []);

//Save Colors
  useEffect (() => {
    AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = color => {
    const newColor = { id: generate(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};
