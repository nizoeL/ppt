import { Image, View, StyleSheet, Button } from "react-native";

var sort = 0

export default function Escolha(params:any) {
    return (
      <View>
        <Image style={styles.tinyLogo} source={{
          uri: params.img,
        }}></Image>
        <Button title={nome(params.img)} onPress={()=>{clique(params.img)}}></Button>
      </View>
    );
  }

function clique(params:any) {
  sort = Math.floor(Math.random() * 3)

  if (params == 'https://cdn-icons-png.flaticon.com/512/836/836972.png') {
    alert("Você escolheu PEDRA")
  }else if(params == 'https://cdn-icons-png.flaticon.com/512/35/35703.png'){
    alert("Você escolheu PAPEL")
  }else{
    alert("Você escolheu TESOURA")
  }
  
  jogo(sort, nome(params))
}

function nome(params:any) {
  if (params == 'https://cdn-icons-png.flaticon.com/512/836/836972.png') {
    return('PEDRA')
  }else if(params == 'https://cdn-icons-png.flaticon.com/512/35/35703.png'){
    return('PAPEL')
  }else{
    return('TESOURA')
  }
}

function jogo(cpu:any, jogador:any) {
  if (cpu == 0) {
    if (jogador == 'PEDRA') {
      alert('PEDRA x PEDRA \nresultado: EMPATE')
    }else if (jogador == 'PAPEL'){
      alert('PAPEL x PEDRA \nresultado: VOCÊ VENCEU!')
    }else{
      alert('TESOURA x PEDRA \nresultado: CPU VENCEU!')
    }

  }else if(cpu==1){
    if (jogador == 'PEDRA') {
      alert('PEDRA x PAPEL \nresultado: CPU VENCEU!')
    }else if (jogador == 'PAPEL'){
      alert('PAPEL x PAPEL \nresultado: EMPATE')
    }else{
      alert('TESOURA x PAPEL \nresultado: VOCÊ VENCEU!')
    }

  }else{
    if (jogador == 'PEDRA') {
      alert('PEDRA x TESOURA \nresultado: VOCÊ VENCEU!')
    }else if (jogador == 'PAPEL'){
      alert('PAPEL x TESOURA \nresultado: CPU VENCEU!')
    }else{
      alert('TESOURA x TESOURA \nresultado: EMPATE')
    }

  }
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "gray",
  }
})