import React from 'react'
import { Text, View, Image } from 'react-native'
import { profileImages } from '../../assets/profileIcons/index'

const LeaderboardHeader = ({ userInfo, rank } = {}) => {
    const icon = userInfo.icon || 'default'
    return (
        <View
            colors={[, '#F2CC8F', '#F4F1DE']}
            style={{
                backgroundColor: '#F18F01',
                padding: 15,
                paddingTop: 35,
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 25, color: 'white' }}>Leaderboard</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 15,
                    marginTop: 20,
                    backgroundColor: '#F18F01',
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        flex: 1,
                        textAlign: 'right',
                        marginRight: 40,
                    }}
                >
                    {ordinal_suffix_of(rank)}
                </Text>
                <Image
                    style={{
                        flex: 0.66,
                        height: 60,
                        width: 60,
                        borderRadius: 60 / 2,
                    }}
                    source={profileImages[icon]}
                />
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        flex: 1,
                        marginLeft: 40,
                    }}
                >
                    {userInfo.points}pts
                </Text>
            </View>
            {/* <ButtonGroup
    onPress={(x) => {
      this.setState({ filter: x });
    }}
    selectedIndex={this.state.filter}
    buttons={["Global", "Friends"]}
    containerStyle={{ height: 30 }}
  /> */}
        </View>
    )
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100
    if (j == 1 && k != 11) {
        return i + 'st'
    }
    if (j == 2 && k != 12) {
        return i + 'nd'
    }
    if (j == 3 && k != 13) {
        return i + 'rd'
    }
    return i + 'th'
}

export default LeaderboardHeader
