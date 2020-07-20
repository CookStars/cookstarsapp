import React, { Component } from 'react'
import HTML from 'react-native-render-html'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { db } from '../../firebaseconfig'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../utils/constants'

export default function favoriteButton(props) {
    const { userInfo, recipe } = props
    return (
        <TouchableOpacity
            onPress={() => {
                db.collection('users')
                    .doc(userInfo.userId)
                    .update({
                        favoriteRecipes: {
                            ...userInfo.favoriteRecipes,
                            [recipe.id]: recipe,
                        },
                    })
            }}
            style={styles.favoriteButton}
        >
            <View>
                {userInfo.favoriteRecipes[recipe.id] ? (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <AntDesign
                            name="heart"
                            size={20}
                            color={colors.offWhite}
                        />
                        <Text
                            style={{
                                color: colors.offWhite,
                                left: 6,
                            }}
                        >
                            FAVORITED
                        </Text>
                    </View>
                ) : (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <AntDesign
                            name="hearto"
                            size={20}
                            color={colors.offWhite}
                        />
                        <Text
                            style={{
                                color: colors.offWhite,
                                left: 6,
                            }}
                        >
                            FAVORITE
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favoriteButton: {
        backgroundColor: colors.details,
        position: 'absolute',
        top: '85%',
        right: -8,
        borderRadius: 10,
        width: '40%',
        height: 35,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})
