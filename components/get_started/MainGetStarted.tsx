/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { Header } from '../common_components/Header';
import { ScrollView, View } from 'react-native';
import { Footer } from '../common_components/Footer';

import {GetStarted} from './GetStarted';
import { BottomNavigation } from '../common_components/BottomNavigation';


function MainGetStarted({navigation}: {navigation: any}): JSX.Element {


    return (
        <>
            <Header />
            <ScrollView>
                <GetStarted navigation={navigation} />
                <Footer />
            </ScrollView>
            <BottomNavigation navigation={navigation}  />
        </>
    );
}


export default MainGetStarted;