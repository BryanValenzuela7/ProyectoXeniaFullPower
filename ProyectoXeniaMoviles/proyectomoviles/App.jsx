import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DummyJsonPage from './screen/page';
import NavbarB from './components/NavbarB';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <NavbarB/>
      <DummyJsonPage/>
      <StatusBar style="auto" />
      
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
