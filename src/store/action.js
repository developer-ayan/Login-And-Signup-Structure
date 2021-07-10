import Firebase from "../config/Firebase"

const signupUser = (user) => {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                Firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)
                alert("User signup successfully")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

const loginUser = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    Firebase.database().ref('/').child(`users/${res.user.uid}`)
                        .once('value', (data) => {
                            dispatch({ type: "GETUSER", user: data.val() })
                            resolve(res.user.uid)
                        })
                })
                .catch((err) => {
                    reject(err.message)
                })
        })
    }
}

export {
    signupUser,
    loginUser
}