import React from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
} from 'react-native'

import {listIngredients} from '../../utils/helper_functions'

export default function checkIngredients(ingredients) {
    if (ingredients.length) {
        return (
            <View
                style={{
                    flex: 3,
                    padding: 8,
                    alignContent: 'space-between',
                }}
            >
                <View style={{}}>
                    <Text
                        style={{
                            padding: 5,
                            fontSize: 18,
                        }}
                    >
                        Ingredients
                    </Text>
                </View>
                <ScrollView
                    // key={index}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {listIngredients(ingredients)}
                </ScrollView>
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
                <Text style={{ fontSize: 18 }}>No Ingredients To Show</Text>
            </View>
        )
    }
}
