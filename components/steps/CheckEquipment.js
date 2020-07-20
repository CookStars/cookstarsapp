import React from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    Dimensions,
} from 'react-native'
import {listEquipment} from '../../utils/helper_functions'


export default function checkEquipment(equipment) {
    if (equipment.length) {
        return (
            <View
                style={{
                    padding: 8,
                    alignContent: 'space-between',
                }}
            >
                <View>
                    <Text style={{ padding: 5, fontSize: 18 }}>Equipment</Text>
                    <ScrollView
                        // key={index}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {listEquipment(equipment)}
                    </ScrollView>
                </View>
            </View>
        )
    } else {
        return (
            <View
                style={{
                    flex: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 18 }}>No Equipment To Show</Text>
            </View>
        )
    }
}
