import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import weekdays from '../../utils/constants/weekdays'

export default function checkDay(props) {
    const today = weekdays[new Date().getDay()]
    const { navigation } = props
    const { recipe, userInfo, day } = props.route.params

    if (day === today) {
        return (
            <View style={styles.startButton}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Steps', {
                            day: day,
                            recipe: recipe,
                            userInfo: userInfo,
                        })
                    }}
                    style={{
                        backgroundColor: '#EF233C',
                        borderRadius: 10,
                        width: '100%',
                        height: 35,
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View>
                        <Text style={{ color: 'white' }}>START RECIPE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    } else {
        return <View />
    }
}

const styles = StyleSheet.create({
    startButton: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
})
