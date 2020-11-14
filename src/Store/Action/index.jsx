import firebase from '../../Config/firebase'
const setProduct=(product)=>{
    return(dispatch)=>{
        dispatch({
            type:"SETPRODUCT",
            current_user:product
        })
    }
}
const search=value =>{
    return(dispatch)=>{
        dispatch({
            type:"SEARCH",
            value
        })
    }
}
const facebook_login=(history)=>{
  
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            var create_user={
              name:user.displayName,
              email:user.email,
              profile:user.photoURL,
              uid:user.uid
            }

            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type:"SETUSER",payload:create_user})
                alert("login success....")
                history.push('/chat')
              }
            )
            
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log("ERROR= kahn hai d==>",errorMessage)
          });
    }
}


export {
    setProduct,
    search
}
