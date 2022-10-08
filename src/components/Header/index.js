import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity 
} from 'react-native'

import { Feather } from '@expo/vector-icons'
//import { MotiView } from 'moti'

//setting status bar for IOS or Android
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

const Header = ({ name }) => {
  return(
    <View style={styles.container}>
      {/*<MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
      >*/}
      <View style={styles.content}>
        <Text style={styles.username}>{ name }</Text>
        
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight, 
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44, 
  }, 
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold', 
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%', 
  }
})


export default Header