import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated, SafeAreaView } from "react-native";
import StyleSheet from 'react-native-media-query';
import Slider from "@react-native-community/slider";
import RadioButtonContainer from "../ui-componrts/RadioButton/RadioButtonContainer";

const sampleImage = require('../../assets/images/Willingness.jpg');

export const MarketFluctuation = ({ navigation }: { navigation: any }) => {

    const market_text = "Market fluctuations are a normal part of investing. While some investors see downturns as an opportunity, others prefer to adjust their risk.";

    const data = [
        { text: "Switch to much more conservative portfolio or take most money out" },
        { text: "Switch to a slightly more conservative portfolio or take most money out" },
        { text: "Do nothing and wait it out" },
        { text: "Switch to a more aggressive portfolio or invest more money" }
    ];

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
        },
        heading: {
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 20,
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
        multiButtonContainer: {
            margin: 20,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },

        button: {
            width: 30
        },
        progressBar: {
            height: 7,
            flexDirection: "row",
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginLeft: 20
        },
        absoluteFill: {
            backgroundColor: "purple",
            width: 90
        },
        hyperlink: {
            width: "100%",
            height: 40,
            fontFamily: "Helvetica, sans-serif",
            fontSize: 12,
            color: "#00698c",
            marginLeft: 20,
            '@media (max-width: 1600px) and (min-width: 800px)': {
                width: 400,
            }
        },
    });

    const onRadioButtonPress = (itemIdx: any) => {
        console.log("Clicked", itemIdx);
    };

    return (
        <>
            <View style={{ backgroundColor: "#f4f0ed" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica, sans-serif" }}>Market Fluctuations</Text>
                <Text>{'\n'}</Text>
                {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
                <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 15 }}>{market_text}</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                {/* <Text>{'\n'}</Text> */}
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>If my portfolio significantly declined, I think I would:</Text>
                    <Text>{'\n'}</Text>
                    <SafeAreaView>
                        <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
                    </SafeAreaView>
                    <Text>{'\n'}</Text>

                    <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://google.com')}>
                        {'Why market fluctuate'}
                    </Text>
                </View>
            </View>
        </>
    );
};


