import React, { useState } from 'react'
import { Image, View, Text, ScrollView, TouchableHighlight } from 'react-native'
import profileImages from '../assets/profileIcons/index'

export default function Icons({ setProfileImage }) {
    // const [image, setImage] = useState('')
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
                            <TouchableHighlight
                                // style={{
                                //     backgroundColor: '#F18F01',
                                // }}
                                onPress={() => {
                                    // this.setState({
                                    //     profileModalVisible: !this.state
                                    //         .profileModalVisible,
                                    // })
                                    setProfileImage(profileImages[key])
                                    console.log('hi')
                                }}
                            >
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
                            </TouchableHighlight>
                        </View>
                    ))}
                </View>
            </ScrollView>
            {/* </TouchableHighlight> */}
        </View>
    )
}
