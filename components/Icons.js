import React from 'react'
import { Image, View, Text, ScrollView, TouchableHighlight } from 'react-native'
import profileImages from '../assets/profileIcons/index'

export default function Icons() {
    console.log('I got to icons component')
    return (
        <View>
            {/* <Text>Hello</Text> */}
            {/* <TouchableHighlight> */}
            <ScrollView showsVerticalScrollIndicator={true}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: 250,
                    }}
                >
                    {Object.keys(profileImages).map((key, index) => (
                        <View key={index}>
                            <Image
                                style={{
                                    // flex: 0.66,
                                    width: 70,
                                    height: 70,
                                    borderRadius: 12,
                                    padding: 20,
                                }}
                                source={profileImages[key]}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* </TouchableHighlight> */}
        </View>
    )
}
