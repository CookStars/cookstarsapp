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
import { colors } from '../utils/constants'

export class Leaderboard extends Component {
    state = {
        refresh: false,
    }

    alert = (title, body) => {
        Alert.alert(title, body, [{ text: 'OK', onPress: () => {} }], {
            cancelable: false,
        })
    }

    onRefresh() {
        this.setState({ refresh: true })
        this.props
            .getAllUsers()
            .finally(() => this.setState({ refresh: false }))
    }

    async componentDidMount() {
        await this.props.getAllUsers()
    }

    render() {
        const users = this.props.users.sort((item1, item2) => {
            return item2.points - item1.points
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
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refresh}
                                    onRefresh={() => this.onRefresh()}
                                />
                            }
                        >
                            <Lead
                                data={users}
                                sortBy="points"
                                labelBy="firstName"
                                // icon="icon"
                                onRowPress={(item, index) => {
                                    this.alert(
                                        item.firstName + ' clicked',
                                        item.points + ' points, wow!'
                                    )
                                }}
                                evenRowColor={colors.evenRow}
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
