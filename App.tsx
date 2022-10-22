import Escolha from './components/Escolha';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Escolha img={'https://cdn-icons-png.flaticon.com/512/836/836972.png'}/>
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
