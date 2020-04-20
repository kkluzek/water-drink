import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import {Container, Content, Form, Item, Input, Button, Label, Spinner} from 'native-base';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(' ');
    const [loading, setLoading] = useState(false)

    async function loginPress() {
        try {
            setLoading(true);
            setError(' ');
            await firebase.auth().signInWithEmailAndPassword(email, password)
            navigation.navigate("Home")
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input value={email} onChangeText={setEmail} returnKeyType="next"/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input value={password} onChangeText={setPassword} returnKeyType="go" secureTextEntry/>
                    </Item>
                    <Text style={styles.errorText}>{error}</Text>
                    <Button block style={styles.loginButton} onPress={loginPress}>
                        {loading ?
                            <Spinner color='white'/> :
                            <Text style={styles.loginText}>Login</Text>
                        }
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center'
    },
    loginButton: {
        marginTop: 20
    },
    loginStyles: {
        color: "#fff"
    }
})
