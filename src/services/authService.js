import { db, auth } from '../utils/firebase.config';


export const register = async (data) => {
    let error = '';
    await auth.createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
            res.user.updateProfile({
                displayName: data.username
            });
            let  userData = {uid:res.user.uid, email:res.user.email, username:data.username, address:data.address};
            db.doc(`users/${userData.uid}`).set(userData);
        })
        .catch((err) => {
            error = err.message;
        });
    return error;
};



export const login = async (data) => {
    let error ='';
    await auth.signInWithEmailAndPassword(data.email, data.password)
        .catch((err) => {
            //error = err.message;
            error = 'Invalid email or password.';
        });
    return error;
};

export const logout = async () => {
    await auth.signOut()
        .catch((err) => {
            window.alert(err.message);
        });
};