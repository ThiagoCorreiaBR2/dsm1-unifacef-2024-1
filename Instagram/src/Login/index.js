import React from "react";
import {View,Text,TextInput,Button, Pressable,Image} from "react-native";
import styles from './styles'
import { FontAwesome6 } from '@expo/vector-icons';
import { instagram } from "../Imagens";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', top: 0, left: 0,paddingTop: 20,paddingLeft: 20}}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </View>
                <View style={styles.uppart}>
                    <View >
                        <Text style={{paddingBottom:50}}>Português (Brasil)</Text>
                    </View>
                    <View >
                        
                        <FontAwesome name="youtube-square" size={150} color="black" />
                    </View>
                    <View style={styles.inputstorage}>
                        <TextInput style={styles.input} placeholder="Nome de usuário, Email ou número"/>
                        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
                        <Pressable style={styles.buttonLogin}onPress={() => navigation.navigate('Homepage')}>Entrar</Pressable>
                        <Pressable >Esqueceu sua senha?</Pressable>
                    </View>
                    
                </View>

  
                <View styles={styles.bottom}>
                    <View style={styles.bottomSection}>
                    <Pressable  style={styles.botaoCriar}>Criar uma nova conta</Pressable>
                    <Text style={styles.bottomText}>Thiago Correia Azarias</Text>
                    </View>
                </View>
        </View>
    );
}

