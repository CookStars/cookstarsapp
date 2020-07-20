import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'
const equipmentLink = 'https://spoonacular.com/cdn/equipment_500x500/'

const listEquipment = (equipment) => {
 console.log(equipment)
    equipment.map((tool, index) => {
        const image = equipmentLink + tool.image
        return (
            <View key={index} style={{ alignContent: 'space-between' }}>
                <Image
                    source={{
                        width: 0.25 * Dimensions.get('screen').width,
                        height: 0.1 * Dimensions.get('screen').height,
                        uri: image,
                    }}
                    style={{ resizeMode: 'contain' }}
                />
                <Text style={{ alignSelf: 'center' }}>{tool.name}</Text>
            </View>
        )
    })
}
export default listEquipment
