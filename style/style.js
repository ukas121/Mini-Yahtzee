import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 25,
    marginBottom: 15,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 45,
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'light',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'light',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 15,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10,
    margin: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },

  flex: {
    flexDirection: "row"
  },
  buttonOne: {
    margin: 15,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "red",
    width: 330,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  button: {
    margin: 5,
    flexDirection: "row",
    padding: 7,
    backgroundColor: "red",
    width: 250,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    
    
    
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  information:{
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
     
  },

  text: {
    color:"red",
    fontSize: 24,
    textAlign: 'center',

  },

  playerName: {
    color:"black",
    fontSize: 16,
    textAlign: 'center',
    

  },
  total: {
    color:"black",
    fontSize: 30,
    textAlign: 'center',

  },
  
  endMessage: {
    color:"black",
    fontSize: 30,
    textAlign: 'center',

  }
  
});