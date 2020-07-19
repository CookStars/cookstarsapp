import React, { useState, Component } from 'react'
import {
    View,
    ScrollView,
    Alert,
    ActivityIndicator,
    RefreshControl,
    Dimensions,
} from 'react-native'
import Lead from 'react-native-leaderboard'
import { fetchAllUsers } from '../redux/actions/users'
import { connect } from 'react-redux'
import { LeaderboardHeader } from '../components'

export class Leaderboard extends Component {
    state = {
        refresh: false,
    }

    alert = (title, body) => {
        Alert.alert(title, body, [{ text: 'OK', onPress: () => { } }], {
            cancelable: false,
        })
    }

    onRefresh() {
        console.log({ 1: 'about to change state' })
        this.setState({ refresh: true })
        console.log({ 2: 'changed state' })
        this.props
            .getAllUsers()
            .finally(
                () =>
                    console.log({ 3: 'finally' }) ||
                    this.setState({ refresh: false })
            )
    }

    async componentDidMount() {
        await this.props.getAllUsers()
    }

    render() {
        const users = this.props.users.sort((item1, item2) => {
            return item2.points - item1.points
        })

        users.forEach((user) => {
            // user.icon = Asset.fromModule(profileImages['default']).uri
            // const imageURI = Asset.fromModule(profileImages['default']).uri
            // console.log({ profileImages, user })
            // console.log({
            //     1: user.icon,
            //     pI: profileImages[user.icon || 'default'],
            // })
            user.icon =
                user.icon.length > 15
                    ? user.icon
                    : 'http://192.168.1.154:19001/assets/assets/profileIcons/icons8-test-account-100.png?platform=android&hash=64f6306119855c06b5d5fe9e161127bc?platform=android&dev=true&minify=false&hot=false'
            // console.log({ 2: user.icon })
            // 'https:www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png'
            // user.icon = imageURI
        })
        const rank =
            users.findIndex((item) => {
                return item.email === this.props.currentUser.email
            }) + 1
        return (
            <View>
                {users.length ? (
                    <View
                        style={{
                            height: Dimensions.get('window').height,

                        }}
                    >
                        <LeaderboardHeader
                            userInfo={this.props.currentUser}
                            rank={rank}
                        />
                        {/* {this.renderHeader(rank)} */}
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refresh}
                                    onRefresh={() => this.onRefresh()}
                                    tintColor="red"
                                />
                            }
                        >
                            <Lead
                                data={users}
                                sortBy="points"
                                labelBy="firstName"
                                icon="icon"
                                onRowPress={(item, index) => {
                                    this.alert(
                                        'The User ' + item.firstName + ' has',
                                        item.points + ' points, wow!'
                                    )
                                }}
                                evenRowColor="#edfcf9"
                            />
                        </ScrollView>
                    </View>
                ) : (
                        // Activity Indicator to indicate that code is loading
                        <View
                            style={{
                                width: '100%',
                                top: '500%',
                                alignContent: 'center',
                            }}
                        >
                            <ActivityIndicator
                                size="large"
                                alignItems="center"
                            ></ActivityIndicator>
                        </View>
                    )}
            </View>
        )
    }
}

const mapState = (state) => ({
    users: state.users,
    currentUser: state.user,
})

const mapDispatch = (dispatch) => ({
    getAllUsers: () => dispatch(fetchAllUsers()),
})

export default connect(mapState, mapDispatch)(Leaderboard)
