import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Malachite() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='Malachite'
                image='nuggetMalachite'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='sylva' icon='sylva' link='Sylva' />
                <ResourceItem name='calidor' icon='calidor' link='Calidor' />
                <ResourceItem name='trade platform' icon='tradePlatform' />
                <ContentTitle title='uses' />
                <ResourceItem name='smelting furnace' icon='smeltingFurnace' />
                <ResourceSubItem1 name='copper' icon='copper' link='Copper' />
            </View>
        </SafeAreaView>
    )
}