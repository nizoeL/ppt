import Escolha from './components/Escolha';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/836/836972.png'}/>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/35/35703.png'}/>
      <Escolha img={'https://cdn-icons-png.flaticon.com/512/541/541957.png'}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
