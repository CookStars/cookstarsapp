import React, { useState, Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert,
    Image,
    ActivityIndicator,
    RefreshControl,
    Dimensions,
} from 'react-native'
import { db } from '../firebaseconfig.js'
import Lead from 'react-native-leaderboard'
import { ButtonGroup, ThemeConsumer } from 'react-native-elements'
import { fetchAllUsers } from '../redux/leaderboardReducer'
import { connect } from 'react-redux'

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

    //HEADER FOR THE LEADERBOARD CONTAINING USER'S INFORMATION
    renderHeader(rank) {
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
                <Text style={{ fontSize: 25, color: 'white' }}>
                    Leaderboard
                </Text>
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
                        source={{
                            uri:
                                'https:www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png',
                        }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 25,
                            flex: 1,
                            marginLeft: 40,
                        }}
                    >
                        {this.props.currentUser.points}pts
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

    render() {
        const users = this.props.users.sort((item1, item2) => {
            return item2.points - item1.points
        })
        users.forEach((user) => {
            user.icon =
                'https:www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png'
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
                        {this.renderHeader(rank)}
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
                                labelBy="email"
                                icon="icon"
                                onRowPress={(item, index) => {
                                    this.alert(
                                        item.firstName + ' clicked',
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

const mapState = (state) => ({
    users: state.users,
    currentUser: state.user,
})

const mapDispatch = (dispatch) => {
    return {
        getAllUsers: () => dispatch(fetchAllUsers()),
    }
}

export default connect(mapState, mapDispatch)(Leaderboard)

//   // FETCHING USERS FROM DATABASE, SORTING + GETTING THE RANK OF THE CURRENT USER
//   async getUsers() {
//     let allUsers = [];
//     const users = await db.collection("users").get();
//     if (users.empty) {
//       console.log("No data found");
//       return;
//     }
//     users.forEach((doc) => {
//       allUsers.push(doc.data());
//     });

//     //add firstName if user didn't choose one and icon(similar for everyone now)
//     allUsers.map((user) => {
//       if (user.firstName === "") {
//         user.firstName = "Mysterious Cook";
//       }
//       user.icon =
//         "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png";
//       return user;
//     });

//     //sort our users
//     const sorted = allUsers.sort((item1, item2) => {
//       return item2.score - item1.score;
//     });
//     let userRank = sorted.findIndex((item) => {
//       return item.email === this.state.userInfo.email;
//     });

//     //set state with data retrieved
//     this.setState({ users: allUsers, status: true, userRank: ++userRank });
//   }

//-------------------------------
//PREVIOUS CODE USED
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     marginTop: 50,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   user: {
//     // marginTop: 24,
//     padding: 10,
//     fontSize: 24,
//   },
//   personalPoints: {
//     backgroundColor: "#fff",
//   },
//   userRow: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f18f01",
//   },
// });

//PREVIOUS DUMMY DATA
// const users = [
//   {
//     firstName: "Grace",
//     lastName: "Shopper",
//     userName: "GShopper",
//     email: "Gshopper@gmail.com",
//     points: "50",
//     vegan: false,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "1",
//   },
//   {
//     firstName: "Lucy",
//     lastName: "Doe",
//     userName: "BadCat",
//     email: "JDoe@gmail.com",
//     points: "24",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "2",
//   },
//   {
//     firstName: "Mary",
//     lastName: "Doe",
//     userName: "Chef123",
//     email: "JDoe@gmail.com",
//     points: "20",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "3",
//   },
//   {
//     firstName: "Carl",
//     lastName: "Doe",
//     userName: "Foodie123",
//     email: "JDoe@gmail.com",
//     points: "10",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "4",
//   },
//   {
//     firstName: "Suzie",
//     lastName: "Doe",
//     userName: "GordRamsay",
//     email: "JDoe@gmail.com",
//     points: "1",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "5",
//   },
// ];

//PREVIOUS RENDERED COMPONENT:
// <View style={styles.container}>
//   <Text>Leaderboard</Text>
//   <Text styles={styles.personalPoints}>
//     Your total points: {currentUser.points}
//   </Text>
//   <ScrollView>
//     {users
//       .sort((a, b) => a.points - b.points)
//       .map((user, index) => {
//         return (
//           <View key={index} style={styles.userRow}>
//             <Text>{index}</Text>
//             <Text style={styles.user}>
//               {user.firstName || "Mysterious Cook"}
//             </Text>
//             <Text>Total Points: {user.points}</Text>
//           </View>
//         );
//       })}
//   </ScrollView>
// </View>
