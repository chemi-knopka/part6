const reducer = (state = 'rendering notificaiton...', action) => {
    switch(action.type) {
        case 'NEW_NOTIFICATION':
            return action.notification
        default: 
            return state
    }
}

export const createNotification = notification => {
    return {
        type: 'NEW_NOTIFICATION',
        notification
    }
}

export default reducer