import React from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ComponentButton } from '../components/component';
import { Header } from '../components/header';
import { Title } from '../components/title';
import { layoutStyle } from '../styles/layoutStyles';
import { PlanetList } from '../assets/planets';

export function Planets() {
    return (
        <SafeAreaView style={layoutStyle.container}>
            <Header />
            <View style={layoutStyle.content} >
                <Title title='planets' />
                <FlatList
                    data={PlanetList}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ComponentButton
                            title={item.title}
                            icon={item.icon}
                            link={item.link}
                        />
                    )}
                    style={layoutStyle.flatList}
                />
            </View>
        </SafeAreaView>
    )
}