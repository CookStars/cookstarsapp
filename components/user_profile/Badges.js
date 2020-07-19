import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import badges from '../../assets/badges/index'
import { colors } from '../../utils/constants'

const Badges = ({ userInfo } = {}) => {
    const badgeIds = Object.keys(badges).sort((a, b) => a - b)
    const userPoints = userInfo.points
    const findPoints = badgeIds.filter((points) => points > userPoints)
    const pointsLeft = () => {
        if (findPoints.length) {
            return findPoints[0] - userPoints
        } else return 0
    }
    const listBadges = badgeIds.map((badgeId) => {
        return (
            <View
                key={badgeId}
                style={{ paddingBottom: '4%', paddingHorizontal: '4%' }}
            >
                {badgeId <= userPoints ? (
                    <Image
                        source={badges[badgeId]}
                        style={{
                            alignSelf: 'center',
                            width: 0.2 * Dimensions.get('screen').width,
                            height: 0.2 * Dimensions.get('screen').width,
                        }}
                    />
                ) : (
                    <Image
                        source={badges[badgeId]}
                        style={{
                            tintColor: 'grey',
                            opacity: 0.2,
                            width: 0.2 * Dimensions.get('screen').width,
                            height: 0.2 * Dimensions.get('screen').width,
                            resizeMode: 'contain',
                        }}
                    />
                )}
            </View>
        )
    })

    return (
        <View style={{ paddingVertical: '10%' }}>
            <Text
                style={{
                    fontSize: 20,
                    alignSelf: 'center',
                    paddingBottom: '3%',
                    fontWeight: 'bold',
                }}
            >
                BADGES
            </Text>

            <View
                style={{
                    borderWidth: 2,
                    width: 0.9 * Dimensions.get('screen').width,
                    height: 0.3 * Dimensions.get('screen').height,
                    alignSelf: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    padding: '4%',
                    alignContent: 'space-around',
                }}
            >
                {listBadges}
            </View>
            <Text
                style={{
                    fontSize: 19,
                    paddingTop: '5%',
                    left: '40%',
                    color: colors.extra,
                }}
            >
                {pointsLeft()} Points To Next Badge
            </Text>
        </View>
    )
}

export default Badges
