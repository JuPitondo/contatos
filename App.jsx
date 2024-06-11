import { StatusBar, View, StyleSheet } from 'react-native'
import { Contatos } from './src/telas/Contatos'
import { Configuracoes } from './src/telas/Configuracoes'
import { Usuarios } from './src/telas/Usuarios'
import { Inicial } from './src/telas/Inicial'
import {Login} from './src/telas/Login'

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <StatusBar barStyle='default' />
      <Login/>
    </View>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
