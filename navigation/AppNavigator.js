import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TabNav, AuthStack } from './stacks/index'
import { connect } from 'react-redux'
import { fetchUserInfo } from '../redux/actions/user'

const Stack = createStackNavigator()

export class AppNavigator extends React.Component {
    async componentDidMount() {
        await this.props.getUserInfo()
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    style={styles.container}
                    screenOptions={{ headerShown: false }}
                >
                    {this.props.user.isLoggedIn ? (
                        <Stack.Screen
                            name="TabNav"
                            screenOptions={{ headerShown: false }}
                            options={({ route }) => ({
                                headerTitle: getHeaderTitle(route),
                            })}
                        >
                            {(props) => (
                                <TabNav
                                    {...props}
                                    userInfo={this.state}
                                    logOut={this.logOut}
                                />
                            )}
                        </Stack.Screen>
                    ) : (
                        <Stack.Screen name="Login">
                            {(props) => <AuthStack {...props} log={this.log} />}
                        </Stack.Screen>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

// Map State + Dispatch
const mapState = ({ user }) => ({
    user,
})

const mapDispatch = (dispatch) => ({
    getUserInfo: () => dispatch(fetchUserInfo()),
})

export default connect(mapState, mapDispatch)(AppNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

function getHeaderTitle({ state, params }) {
    const routeName = state
        ? state.routes[state.index].name
        : params?.screen || 'Home'

    return routeName
}
