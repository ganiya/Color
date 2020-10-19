import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";

export default function ColorDetails({route}) {
  const {color:name} = route.params;
  const color = Color(name);
  const TextColor = {fontSize:30, color: color.negate().toString()}

     return (
         <View style={[styles.container, {backgroundColor: name}]} >
             <Text style={TextColor}> {name} </Text>
             <Text style={TextColor}> {color.rgb().toString()} </Text>
             <Text style={TextColor}> {color.hsl().toString()} </Text>
             <Text style={TextColor}> {color.luminosity()} </Text>

         </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
