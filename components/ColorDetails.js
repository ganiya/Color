import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ColorDetails() {
  
     return (
         <View style={styles.container} >
             <Text>
                 Color Details
             </Text>
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
