import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from './styles'

const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    })

    return (<View style={styles.bgDark}>
        <Image style={styles.logo} source={require('../../assets/NetflixLogoSvg.png')} />
        <TextInput
            label="Email"
            value={credenciais.email}
            onChangeText={text => setCredenciais({ ...credenciais, email: text })}
        />
        <TextInput
            label="Senha"
            secureTextEntry
            value={credenciais.senha}
            onChangeText={text => setCredenciais({ ...credenciais, senha: text })}
        />
    </View>
    );
};


export default Login;