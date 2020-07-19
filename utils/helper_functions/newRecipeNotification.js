import * as Notifications from 'expo-notifications'

const today = new Date().getDay()

function setNotification() {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
        }),
    })

    Notifications.scheduleNotificationAsync({
        content: {
            title: 'New Recipes Have Been added!',
            body: 'Come take a look at this weeks Recipes!',
        },
        trigger: {
            seconds: 21600,
        },
    })
}

export default function newRecipeNotification() {
    if (today === 1) {
        return setNotification()
    }
}
