import React from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Button,
    Image,
    Alert,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
} from 'react-native'

//may want to write congrats! you earned __ badge. or __ points to next badge!

export default function SuccessPage(props) {
    const { navigation } = props
    const { index, recipes, userInfo } = props.route.params
    const img = recipes[index + 1].image
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={require('../assets/banner.png')}
                    style={styles.banner}
                />
                <Image
                    source={require('../assets/avocadodance.jpg')}
                    style={styles.avocadoImg}
                />
            </View>

            <View style={styles.congratsContainer}></View>
            <View style={styles.pointsContainer}>
                <View>
                    <Image
                        source={require('../assets/congratsBadge.png')}
                        style={styles.badge}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.pointsText}>YOU EARNED 10 PTS!</Text>
                    <Text style={styles.pointsText}>
                        TOTAL POINTS: {userInfo.points}
                    </Text>
                </View>
            </View>
            <View style={styles.tmrwRecipe}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation.navigate('SingleRecipe', {
                            index: index + 1,
                            recipes: recipes,
                        })
                    }
                >
                    <Image
                        source={{ uri: img }}
                        style={{
                            width: Dimensions.get('screen').width,
                            height: 0.33 * Dimensions.get('screen').height,
                        }}
                    />
                    <View style={styles.labelContainer}>
                        <Text style={styles.tmrwRecipelabel}>
                            Check Out Tomorrow's Recipe
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'space-around',
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 0.3 * Dimensions.get('screen').height,
        paddingTop: '10%',
        alignItems: 'center',
    },
    banner: {
        width: Dimensions.get('screen').width,
        height: '50%',
        resizeMode: 'cover',
    },
    avocadoImg: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
        paddingBottom: '10%',
    },
 pointsContainer: {
  borderWidth: 2,
  borderColor:'grey',
     flexDirection: 'row',
     alignContent:'center',
        width: .95*Dimensions.get('screen').width,
        justifyContent: 'space-evenly',
    },
    textContainer: {
        justifyContent: 'center',
    },
    pointsText: {
        alignSelf: 'center',
        fontSize: 18,
        paddingVertical: 10,
        color: 'grey',
        fontWeight: 'bold',
    },
    tmrwRecipe: {
        justifyContent: 'flex-end',
    },
    badge: {
        width: .35*Dimensions.get('screen').width,
        height: .45*Dimensions.get('screen').width,
    },

    labelContainer: {
        position: 'absolute',
        bottom: '3%',
        height: 40,
        width: 0.75 * Dimensions.get('screen').width,
        borderRadius: 15,
        backgroundColor: '#EF233C',
        alignSelf: 'center',
    },
    tmrwRecipelabel: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 7,
    },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: '#000',
//     alignItems: 'center',
//     width: '100%',
//   },
//   h1: {
//     color: '#008F68',
//     fontSize: 40,
//   },
//   h2: {
//     color: '#FAE042',
//     fontSize: 18,
//     marginTop: 8,
//   },
// image: {
//   width: 300,
//   height: 260,
//   justifyContent: 'center',
// },
// buttonContainer: {
//   backgroundColor: '#008F68',
//   borderRadius: 5,
//   padding: 8,
//   margin: 8,
// },
// topContainer: {
//   flex: 2,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// middleContainer: {
//   flex: 3,
//   justifyContent: 'flex-start',
//   alignItems: 'center',
// },
// bottomContainer: {
//   justifyContent: 'flex-end',
//   width: '90%',
//   margin: 20,
//   padding: 10,
// },
// });
