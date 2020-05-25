import { storage } from "../../config/fbConfig";

export const updateProfile = (userDetails) => {
    return async (dispatch, getState, {getFirestore}) => {
       const firestore = getFirestore();
       const profile = getState().firebase.profile;
       const profileId = getState().firebase.auth.uid;

      try{
         const metadata = {
            contentType: "image/jpeg"
         };

         const refrenceStorage = storage.ref(`foto_profiles/${userDetails.userImg.name}`)

         const task = refrenceStorage.put(userDetails.userImg, metadata)

         dispatch({ type: 'UPLOADING_START' });

         task.on('state_changed',(snapshot)=>{

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            dispatch({type:'UPLOADING',payload: Math.floor(progress)});

         },(error)=> {

            dispatch({ type: 'UPLOADING_FAIL', payload: error });

         },()=>{
            
            refrenceStorage.getDownloadURL().then((url)=>{
               console.log(url)
               dispatch({ type: 'UPLOADING_SUCCESS', payload: url });

               firestore.doc('users/' + profileId).set({
                  //...userDetails,
                  bio:userDetails.bio,
                  city:userDetails.city,
                  userImg: url, //string url downloadURL
               },{merge:true}).then(()=>{

                  dispatch({ type: 'UPDATE_PROFILE', profile })

               })
            })
         })


      }catch (err){
         console.log(err);
      }

       

      console.table(profile.slug | profileId | userDetails )

    }
 }

 /*export const uploadImage = data => async (dispatch, getState, {getFirestore}) => {
   const firestore = getFirestore();
   const profileId = getState().firebase.auth.uid;  
   try{
      const metadata = {
         contentType: "image/jpeg"
      };
      
      const uploadTask = storageRef
                  .child('foto_profiles/' + data.fileName)
                  .put(data, metadata);
      
      dispatch({ type: 'UPLOADING_START' });

      uploadTask.on("state_changed",function(snapshot){

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            dispatch({type:'UPLOADING',payload: Math.floor(progress)});

      },function(error){

            dispatch({ type: 'UPLOADING_FAIL', payload: error });

      },function(){
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadUrl){

            dispatch({ type: 'UPLOADING_SUCCESS' });

            firestore.collection('users').doc(profileId).set({
               userImg: downloadUrl
            },{merge:true}).then(()=>{
               get_Data(dispatch, getState, { getFirestore });
            }).catch(e => {
               console.log(e);
            })

          })
      })          
   }catch (err) {
      console.log(err);
  }
 }*/

 /*export const getData = () => async (dispatch, getState, { getFirestore }) => {
   const firestore = getFirestore();
   const profileId = getState().firebase.auth.uid;
   try {
       const res = await firestore
       .collection("users")
       .doc(profileId)
       .get();

       const data = res.data().userImg;

       if (data) {
       dispatch({ type: 'GET_DATA', payload: data });
       } else {
       dispatch({ type: 'GET_DATA', payload: null });
       }
   } catch (e) {
       console.log(e);
   }
   };*/
