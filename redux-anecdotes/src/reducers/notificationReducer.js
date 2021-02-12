const reducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_NOTIFICATION':
            return action.notification
        case 'CLEAR_NOTIFICATION':
            return ''
        default: 
            return state
    }
}

export const createNotification = notification => {
    return { type: 'NEW_NOTIFICATION', notification }
}

export const clearNotification = () => {
    return { type: 'CLEAR_NOTIFICATION' }
}

export const setNotification = (notification, duration) => {
    return dispatch => {
        dispatch(createNotification(notification))
        setTimeout(() => dispatch(clearNotification()), duration)
    }
}

export default reducer