import React, { useState } from 'react'
import { Image, View, Text, ScrollView, TouchableHighlight } from 'react-native'
import profileImages from '../../assets/profileIcons/index'

export default function Icons({ setProfileImage }) {
    return (
        <View>
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
                            <TouchableHighlight
                                onPress={() => {
                                    setProfileImage(key)
                                }}
                            >
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 12,
                                        padding: 20,
                                    }}
                                    source={profileImages[key]}
                                />
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
