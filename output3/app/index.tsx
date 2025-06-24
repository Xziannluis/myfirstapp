import { Image, StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}>
        <Text style={styles.text1}>COLLEGE OF COMPUTING AND INFORMATION SCIENCES</Text>
        <Image source={require('@/assets/images/ccis.png')}style={styles.Image1}/>
      <Text style={styles.footerTxt}>Developed by</Text>


      <Text style={styles.footerTxt1}>ZILDZIAN LEE B.ENTERO</Text>
     
     
    </View>
  );
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },

  text1: {
    fontSize: 24, 
    fontWeight: "bold",
    textAlign: "center", 
    marginBottom: 20, 
  },

  Image1: {
    width: 200, 
    height: 250, 
    borderRadius: 20,
    marginBottom: 20, 
  },

  footerTxt: {
    fontSize: 12, 
    textAlign: "center",
    color: "#333",
    marginBottom: 5, 
    top: 200,
  },

  footerTxt1: {
    fontSize: 12, 
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
    top 200:,
  },
});


