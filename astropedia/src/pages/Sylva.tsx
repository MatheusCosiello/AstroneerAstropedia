import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentTitle } from '../components/contentTitle';
import { Header } from '../components/header';
import { PlanetResource } from '../components/planetResource';
import { ResourceTitle } from '../components/resourceTitle';
import { layoutStyle } from '../styles/layoutStyles';

export function Sylva() {
    return (
        <SafeAreaView style={layoutStyle.container} >
            <Header />
            <ResourceTitle
                title='sylva'
                icon='sylva'
                nugget='nuggetSylva'
                link='Sylva'
            />
            <View style={layoutStyle.content} >
                <ContentTitle title='natural resources' />
                <PlanetResource
                    nugget='nuggetSphalerite'
                    icon='sphalerite'
                    name='sphalerite'
                    link='Sphalerite'
                />
                <PlanetResource
                    nugget='nuggetMalachite'
                    icon='malachite'
                    name='malachite'
                    link='Malachite'
                />
                <ContentTitle title='atmospheric resources' />
                <PlanetResource
                    nugget='nuggetHydrogen'
                    icon='hydrogen'
                    name='hydrogen'
                    link='Hydrogen'
                />
                <PlanetResource
                    nugget='nuggetNitrogen'
                    icon='nitrogen'
                    name='nitrogen'
                    link='Nitrogen'
                />
            </View>
        </SafeAreaView>
    )
}