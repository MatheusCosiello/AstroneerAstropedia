import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { ResourceItem } from '../components/resourceItem';
import { ResourceSubItem1 } from '../components/resourceSubItem1';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Nitrogen() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='nitrogen'
                icon='nitrogen'
                nugget='nuggetNitrogen'
                link='Nitrogen'
            />
            <View>
                <ContentTitle title='source' />
                <ResourceItem name='atmospheric condenser' icon='atmosphericCondenser' />
                <ResourceSubItem1 name='sylva' icon='sylva' link='Sylva' />
                <ResourceSubItem1 name='vesania' icon='vesania' link='Vesania' />
                <ResourceSubItem1 name='atrox' icon='atrox' link='Atrox' />
                <ContentTitle title='uses' />
                <ResourceItem name='chemistry lab' icon='chemistryLab' />
                <ResourceSubItem1 name='titanium alloy' icon='titaniumAlloy' link='TitaniumAlloy' />
            </View>
        </SafeAreaView>
    )
}