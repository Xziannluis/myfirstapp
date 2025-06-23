import { Image, StyleSheet, Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={styles.container}>
        <Image source={require('@/assets/images/Mark zuckerberg.png')}style={styles.Image1}/><Text style={styles.text1}>Mark Zuckerberg</Text>
      <Text style={styles.text2}>CEO Meta</Text>
     
     
    </View>
  );
 
}
const styles = StyleSheet.create({
        container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },


      text1:{
        fontWeight: 'bold',
        
      },
      text2:{
        fontFamily: 'Arial',
        
      },


      Image1:{
        width: 180,
        height: 250,
        borderRadius: 20,
        margin:0
      },
      footerTxt:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        fontSize:10,
        color: "#333",
        fontWeight: 'bold'
      }


})



