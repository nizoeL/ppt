import { Image, Text, View, StyleSheet, Button } from "react-native";

export default function Escolha(params:any) {
    return (
      <View>
        <Image style={styles.tinyLogo} source={{
          uri: params.img,
        }}></Image>
        <Button title="CLICK" onPress={()=>{testar(params.img)}}></Button>
      </View>
    );
  }

function testar(params:any) {
  alert(params)
}

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    }
  })