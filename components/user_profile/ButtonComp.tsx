import React, { FC, ReactElement } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleSheet from 'react-native-media-query';

export const ButtonsComp = ({ navigation }: { navigation: any }) => {
    const { ids, styles } = StyleSheet.create({
        multiButtonContainer: {
            margin: 5,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        next_button: {
            backgroundColor: '#87190a',
            width: "90%", height: 30,
            borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20
        },
        next_button_text: {
            color: '#fff',
            fontWeight: "bold"
        },
        continue_terms_button: {
            backgroundColor: 'white',
            width: "30%", height: 30,
            borderWidth: 2,
            borderColor: '#87190a',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'middle',
        },
        continue_button_text: {
            color: '#87190a',
            fontWeight: "bold"
        },
    });

    return (
        <>
            <View style={styles.multiButtonContainer}>
                <TouchableOpacity style={styles.continue_terms_button} onPress={() => navigation.navigate('AccountSelection')}>
                    <Text style={styles.continue_button_text}>Back</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};


