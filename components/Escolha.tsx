import { Image, View, StyleSheet, Button } from "react-native";

var sort = 0

export default function Escolha(params:any) {
    return (
      <View>
        <Image style={styles.tinyLogo} source={{
          uri: params.img,
        }}></Image>
        <Button title={params.nome} onPress={()=>{clique(params.nome)}}></Button>
      </View>
    );
  }

function clique(nome:any) {
  sort = Math.floor(Math.random() * 3)

  alert("Você escolheu " + nome)
  
  jogo(sort, nome)
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

  } else if(cpu==1) {
    if (jogador == 'PEDRA') {
      alert('PEDRA x PAPEL \nresultado: CPU VENCEU!')
    }else if (jogador == 'PAPEL'){
      alert('PAPEL x PAPEL \nresultado: EMPATE')
    }else{
      alert('TESOURA x PAPEL \nresultado: VOCÊ VENCEU!')
    }

  } else {
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