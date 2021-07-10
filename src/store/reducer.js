
  
const INITAIL_STATE = {
    user: {},
}

export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })

        default:
            return state
    }
}
