import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  GIGA: {
    flexDirection: 'column',
    alignItems: 'center',
    height: "100vh",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  instagram: {
    position: 'top-left',
    width: 150,
    height: 90,
    marginRight: 170, 
    resizeMode: 'contain',
  },
  icones: {
    padding: 5,
    marginRight: 5
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30
  },
  fotos:{
    width: 80, 
    height: 80, 
    borderRadius: 60,
    margin: 10, 
    borderWidth: 5,
    borderTopColor: '#F514B4',
    borderColor:'#F57414',
    borderBottomColor: '#F4B206',
  },
  fotosFeed:{
    width: '100vw',
    height: 400,
    margin: 5, 
    resizeMode: 'contain',
  },
  fotoIcones:{
    flexDirection: 'row',
    paddingRight: 250,
    position: 'relative',
    width: 390,
  },
  stories:{
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    padding: 2,
  },
  feed:{
    flexDirection: 'column',
    alignItems: 'center',
    margin: 2,
    height: 550,
    width: '250vw',
    padding: 2,
  },
  forto:{
        width: 30 ,
        height: 30 ,
        borderRadius: 15,
        margin: 10, 
        borderWidth: 3,
        borderTopColor: '#F514B4',
        borderColor:'#F57414',
        borderBottomColor: '#F4B206',
        margin:10,
  },
  underbarra:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:"200%",
    height:'10vh',
    padding: 5, 
    borderWidth: 0.5,
    borderColor: 'black',
  },
  mfoto:{
    width: 80, 
    height: 80, 
    borderRadius: 60,
    margin: 10, 
  }
})

export default styles