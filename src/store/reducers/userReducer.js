const initState = {}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case 'UPDATE_PROFILE':
            return {
              ...state,
              profile:action.profile
            }
        default:
            return state
    }
}

export default userReducer;