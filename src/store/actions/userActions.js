export const updateProfile = (userDetails) => {
    return async (dispatch, getState, {getFirestore}) => {
       const firestore = getFirestore();
       const profile = getState().firebase.profile;
       const profileId = getState().firebase.auth.uid;
       
       firestore.doc('users/' + profileId).set({
          ...userDetails,
          bio:userDetails.bio,
          city:userDetails.city
       },{merge:true}).then(()=>{
          dispatch({ type: "UPDATE_PROFILE", profile })
       })

       console.table(profile.slug | profileId | userDetails.bio | userDetails.city)

    }
 }