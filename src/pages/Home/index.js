import { View, Text, StyleSheet, FlatList } from 'react-native'
import Actions from '../../components/Actions'
import Balance from '../../components/Balance'
import Header from '../../components/Header'
import Moviments from '../../components/Moviments'

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,00',
    date: '31/05/2022',
    type: 0, //despesas - saidas
  },
  {
    id: 2,
    label: 'PIX Haliane',
    value: '250,00',
    date: '14/05/2022',
    type: 1, //receitas - entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '1.600,00',
    date: '31/05/2022',
    type: 1, //receitas - entradas
  }
]
 
const Home = () => {
  return(
    <View style={styles.container}>
      <Header name="Paulo Sérgio" />
      <Balance
        saldo="9.250.90"
        gastos="-527,00"
      />

      <Actions />

      <Text style={styles.title}>Ultimas movimentacoes</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)} //converte cada id da lista em uma string
        showsVerticalScrollIndicator={false} //tira a barra de rolagem
        renderItem={({ item }) => <Moviments data={item} /> } //faz um "map da lista"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
})

export default Home