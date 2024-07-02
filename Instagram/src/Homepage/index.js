import React from "react";
import {View,Text} from "react-native";
import styles from './styles'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';


export default function Homepage({navigation}) {
    return (
        <View style={styles.GIGA}>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20,height: '5vh'}}>
                    <Image source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png' }} style={styles.instagram}></Image>
                    <AntDesign style={styles.icones} name="hearto" size ={20} color="black"/>    
                    <FontAwesome5 style={styles.icones} name="facebook-messenger" size={20} color="black" />
                </View>
                <View style={styles.stories} >
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center',height: 20 }}>
                            <Image style={styles.mfoto} source={ 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' } />
                            <Text style={{ textAlign: 'center' }}>Seu story</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <Image style={styles.fotos} source={ 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' } />
                            <Text style={{ textAlign: 'center' }}>Dorothy</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <Image style={styles.fotos} source={ 'https://thumbs.dreamstime.com/z/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg' } />
                            <Text style={{ textAlign: 'center' }}>Jorge</Text>
                        </View>  
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                            <Image style={styles.fotos} source={ 'https://media.istockphoto.com/id/184600247/photo/grumpy-senior-man.jpg?s=612x612&w=0&k=20&c=_mBQPDcq1E3Vyz5uiw8QnwAikXVcdtiRChvrMUyuzRw=' } />
                            <Text style={{ textAlign: 'center' }}>Steve</Text>
                        </View>   
                </View>   

                <View style={styles.feed}> 
                        <View style={{ flexDirection: 'row'}}>
                            <Image style={styles.forto} source={ 'https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg' } />
                            <Text style={{ alignSelf: 'center',paddingRight: 280}}>Roberto</Text>
                            <Entypo name="dots-three-vertical" size={18} style={{alignSelf:"center" ,paddingRight: 20}} color="black" />
                        </View>
                        <View>
                            <Image style={styles.fotosFeed} source={ 'https://media.istockphoto.com/id/523150985/photo/full-body-portrait-of-a-handsome-young-man-smiling.jpg?s=612x612&w=0&k=20&c=dWBzZLrPBOkzk3LG7CKMUPCMe40cWclIidOvNg2_mVw=' } />
                        </View>
                        <View style={styles.fotoIcones}>
                            <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="heart" size={20} color="black" />
                            <Feather style={{ marginLeft: 5, marginRight: 5}} name="message-circle" size={20} color="black" />
                            <FontAwesome5 style={{ marginLeft: 5, marginRight: 5}} name="paper-plane" size={20} color="black" />
                            <Feather style={{ position: 'absolute', right: 1, alignSelf: 'center' , marginRight:10 }} name="bookmark" size={20} color="black" />
                        </View> 
                        <View>
                            <Text style={{ marginLeft: 5, position: 'relative',width: 390 }}>
                                Curtido por 15 pessoas
                            <br></br>
                                Apenas Eu
                            </Text>
                        </View>
                </View>
            </View>
            <View style={styles.underbarra}>
                    <Entypo name="home" style={{paddingHorizontal: 25}} size={30} color="black" />
                    <Entypo name="magnifying-glass" style={{paddingHorizontal: 25}} size={30} color="black" />
                    <Feather name="plus-square" style={{paddingHorizontal: 25}} size={30} color="black" />
                    <FontAwesome6 name="clapperboard" style={{paddingHorizontal: 25}} size={30} color="black" />
                    <Image style={{width: 40 ,height: 40 ,borderRadius: 20,margin: 10, }} source={ 'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' } />
                </View>
        </View>
    );
}