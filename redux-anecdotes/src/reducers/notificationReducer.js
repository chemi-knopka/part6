const reducer = (state = null, action) => {
    switch(action.type) {
        case 'NEW_NOTIFICATION':
            return action.notification
        case 'CLEAR_NOTIFICATION':
            return null
        default: 
            return state
    }
}

export const createNotification = notification => {
    return { type: 'NEW_NOTIFICATION', notification }
}

export const clearNotification = (id) => {
    return { type: 'CLEAR_NOTIFICATION' }
}

let timeoutID 
export const setNotification = (notification, delay) => {
    return dispatch => {
        dispatch(createNotification(notification))
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => dispatch(clearNotification()), delay)
    }
}

export default reducer