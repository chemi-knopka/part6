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

var timeoutID 
export const setNotification = (notification, delay) => {
    return dispatch => {
        dispatch(createNotification(notification))
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => dispatch(clearNotification()), delay)
    }
}

export default reducer