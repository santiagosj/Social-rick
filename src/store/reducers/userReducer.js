const initState = {
   // error: null,
    percent: null,
   // showProgress: false,
    userImg: null,
    fileName:''
}

const userReducer = (state = initState, action) => {
    switch(action.type){
            case 'UPDATE_PROFILE':
                return {
                ...state,
                profile: action.profile
                }
            case 'UPLOADING_START':
                return {
                    ...state,
                    percent: 0,
              //    showProgress: true
                };
                case 'UPLOADING_SUCCESS':
                return {
                    ...state,
                //   error: false,
                    percent: null,
                //  showProgress: false,
                };
                case 'UPLOADING_FAIL':
                return {
                    ...state,
                //  error: action.payload,
                  // showProgress: false
                };
                case 'UPLOADING':
                return {
                    ...state,
                    percent: action.payload,
                   //showProgress: true
                };
        
                case 'GET_DATA':
                return {
                    ...state,
                    userImg: action.payload
                };
        default:
            return state
    }
}

export default userReducer;