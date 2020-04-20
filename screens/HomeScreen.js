import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, Text, AsyncStorage, Animated} from 'react-native';
import {Container, Content, Item, Input, Button, Label} from 'native-base';
import WaterPot from "../components/WaterPot";

export default function HomeScreen({navigation}) {
    const [weight, setWeight] = useState('0')
    const [water, setWater] = useState(0)
    const heightAnim = useRef(new Animated.Value(0)).current
    const maxWater = weight * 30
    const handleOnChangeWeight = value => setWeight(value.replace(/[^0-9]/g, ''))
    const handleOnBlurWeight = async (event) => {
        try {
            await AsyncStorage.setItem('weight', event.nativeEvent.text);
        } catch (error) {
            console.log(error)
        }
    }
    const handelAddGlass = () => {
        const addedWater = water + 250
        setWater(addedWater);
        Animated.timing(
            heightAnim,
            {
                toValue: addedWater,
                duration: 1000,
            }
        ).start();
    }

    function logout() {
        navigation.navigate('Login')
    }

    useEffect(() => {
      (async () => {
            try {
                const weightStorage = await AsyncStorage.getItem('weight');
                setWeight(weightStorage)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <Container>
            <Content>
                <Item>
                    <Label>Weight</Label>
                    <Input value={weight}
                           onChangeText={handleOnChangeWeight}
                           onEndEditing={handleOnBlurWeight}
                           keyboardType='numeric'
                    />
                </Item>
                <WaterPot heightAnim={heightAnim} water={water} maxWater={maxWater}/>
                <Button onPress={handelAddGlass} style={styles.button}>
                    <Text style={styles.buttonText}>add 1 glass of water</Text>
                </Button>
                <Button onPress={logout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Button>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        padding: 10,
    },
    buttonText: {
        color: '#fff'
    },
});
