import React from 'react'
import { Image, View, ScrollView, TouchableHighlight } from 'react-native'
import { profileImages2 } from '../../assets/profileIcons/index'

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
                    {Object.keys(profileImages2).map((key, index) => (
                        <View key={index}>
                            <TouchableHighlight
                                onPress={() => {
                                    setProfileImage(profileImages2[key])
                                }}
                            >
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 12,
                                        padding: 20,
                                    }}
                                    source={{ uri: profileImages2[key] }}
                                />
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
