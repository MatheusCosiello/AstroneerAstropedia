import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Glacio() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='glacio'
                icon='glacio'
                nugget='nuggetGlacio'
                link='Glacio'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource
                    nugget='nuggetHematite'
                    icon='hematite'
                    name='hematite'
                    link='Hematite'
                />
                <PlanetResource
                    nugget='nuggetTitanite'
                    icon='titanite'
                    name='titanite'
                    link='Titanite'
                />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource
                    nugget='nuggetArgon'
                    icon='argon'
                    name='argon'
                    link='Argon'
                />
            </View>
        </SafeAreaView>
    )
}