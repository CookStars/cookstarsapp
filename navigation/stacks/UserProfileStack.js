import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { UserProfile, SingleRecipe, Steps } from '../../screens'

const User = createStackNavigator()

export default function UserProfileStack(props) {
    const { userInfo, logOut } = props
    return (
        <User.Navigator
            initialRouteName="Profile"
            screenOptions={{ headerShown: false }}
        >
            <User.Screen name="Profile">
                {(props) => (
                    <UserProfile
                        {...props}
                        userInfo={userInfo}
                        logOut={logOut}
                    />
                )}
            </User.Screen>
            <User.Screen name="SingleRecipe" component={SingleRecipe} />
            <User.Screen name="Steps" component={Steps} />
            {/* ADD LOGOUT COMPONENT HERE IF NEEDED */}
        </User.Navigator>
    )
}
