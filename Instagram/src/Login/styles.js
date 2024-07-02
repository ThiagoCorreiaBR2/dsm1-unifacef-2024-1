import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom right, #EBC2FA, #EDF6FA,#D6FADE)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
  },
  uppart:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  texto:{
    padding:10
  },
  button:{
    padding:5,
    margin:5,
    backgroundColorcolor:"blue",
    color: 'blue',
    border: '2px solid blue',
  },
  input:{
    textAlign: 'center',
    padding:5,
    margin:5,
    width: "80%",
    borderRadius: 10,
    borderWidth:2,
    height:40,
    borderColor:"#9AA4B5",
    backgroundColor:"#F5EDFA",
    color: '#9AA4B5',
  },
  inputstorage:{
    paddingTop:70,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  icon:{
    color:"black"
  },
  bottom:{
    paddingTop: 20,
    width: '100%',
  },
  bottomSection:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  bottomText:{
    padding:10,
    marginBottom: 140,
  },
  botaoCriar:{
    borderWidth:2,
    borderColor:"#0064E0",
    color:"#0064E0",
    borderRadius:30,
    height:40,
    width:"80%",
    margin:5,
    textAlign:"center",
    justifyContent: 'center',
  },
  buttonLogin:{
    width: "80%",
    height: 30,
    margin: 12,
    padding: 5,
    backgroundColor: "#0064E0",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
})

export default styles