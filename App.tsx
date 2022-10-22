import Escolha from './components/Escolha';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/836/836972.png'} nome={'PEDRA'}/>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/35/35703.png'} nome={'PAPEL'}/>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/541/541957.png'} nome={'TESOURA'}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#824',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
