import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles'

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    })

    return (<View style={styles.bgDark}>
        <Image style={styles.logo} source={require('../../assets/NetflixLogoSvg.png')} />

        <View>
            <TextInput
                mode="flat"
                label="Email ou número de telefone"
                style={styles.marginBottom}
                value={credenciais.email}
                onChangeText={text => setCredenciais({ ...credenciais, email: text })}
            />

            <TextInput
                label="Senha"
                mode="flat"
                style={styles.marginBottom}
                secureTextEntry
                value={credenciais.senha}
                onChangeText={text => setCredenciais({ ...credenciais, senha: text })}
            />

            <Button
                mode="contained"
                style={styles.marginBottom}
                onPress={() => console.log('Pressed')}>
                Entrar
            </Button>

            <Button
                style={styles.marginBottom}
                onPress={() => console.log('Pressed')}
                theme={{colors:{primary: '#fff'}}}>
                Recuperar senha
            </Button>

            <Text style={styles.textSmall}> O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Text>
        </View>
    </View>

    );
};


export default Login;