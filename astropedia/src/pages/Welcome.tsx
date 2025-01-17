import React, { useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { images } from '../assets/index';
import { textStyle } from '../styles/textStyles';
import { layoutStyle } from '../styles/layoutStyles';
import { imgStyle } from '../styles/imgStyles';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Welcome() {
    const navigation = useNavigation();
    useEffect(() => {
        const key = '@stropedia:flow';
        async function defineAppFlow() {
            const data = JSON.parse(JSON.stringify(await AsyncStorage.getItem(key)));
            const flow = data ? (data as string) : {};
            if (flow != 'Home') {
                await AsyncStorage.setItem(key, 'Home')
            } else {
                navigation.navigate(flow)
            }
        }
        defineAppFlow();
    }, [])
    //AsyncStorage.clear()
    return (
        <SafeAreaView style={layoutStyle.container}>
            <View style={layoutStyle.wrapper}>
                <Image
                    source={images.welcome} style={imgStyle.welcomeImage}
                    resizeMode='contain'
                />
                <Text style={textStyle.welcomeMessage}>
                    THE EASIER WAY{'\n'}
                    TO USE{'\n'}
                    THE ASTROPEDIA
                </Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('UserIdentification')}
                >
                    <Image source={images.f} style={imgStyle.button} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}