import React, { FC, ReactElement, useState } from "react";
import { Button, Image, Text, View, Linking, Animated } from "react-native";
import StyleSheet from 'react-native-media-query';
// import ProgressBar from 'react-native-animated-progress';
import Slider from "@react-native-community/slider";

const sampleImage = require('../assets/images/Willingness.jpg');

export const RiskWillingness: FC<{}> = ({ }): ReactElement => {

    const willingness_text = "Text related to Risk Willingness will appear here. This is a placeholder. Content will be changed. This is temporary text";

    const [range, setRange] = useState(0);

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 20,
        },
        heading: {
            width: "100%",
            height: 40,
            fontFamily: "Georgia, serif",
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
            backgroundColor: 'white',
            borderRadius: 10,
            marginLeft: 20
        },
        absoluteFill: {
            backgroundColor: "purple",
            width: 30
        }
    });
    return (
        <>
            <View style={{ backgroundColor: "#e2dede" }}>
                <Text>{'\n'}</Text>
                <Text style={{ marginLeft: 20, fontSize: 25 }}>Your Risk Willingness</Text>
                <Text>{'\n'}</Text>
                {/* <ProgressBar progress={30} height={7} backgroundColor="#4a0072" animated={false}/> */}
                <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 15 }}>{willingness_text}</Text>
                <Text>{'\n'}</Text>
                <View style={styles.progressBar}>
                    <Animated.View style={styles.absoluteFill} />
                </View>
                <Text>{'\n'}</Text>
                <View style={styles.container}>
                    <Text>{'\n'}</Text>
                    <Text style={styles.heading}>Aggressive</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{'\n'}</Text>
                        <Image source={sampleImage} style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 3 }} />
                        <Text>{'\n'}</Text>
                        <Text>{'\n'}</Text>
                        <Text><b>Risk Return</b>: Highest growth and loss potential,</Text>
                        <Text>with higher volatility</Text>
                        <Text>(Focused mostly on asset appreciation)</Text>
                        <Text>{'\n'}</Text>
                        <Text><b>Mix</b>: Mostly stocks with limited bonds</Text>
                        <Text>{'\n'}</Text>
                    </View>

                    <View>
                        <Slider value={3} thumbTintColor="maroon"
                            style={{ width: '90%', height: 50, marginLeft: 20 }}></Slider>
                    </View>

                    <Text style={styles.heading} onPress={() => Linking.openURL('https://google.com')}>
                        {'Learn more about risk willingness'}
                    </Text>
                </View>
            </View>
        </>
    );
};


