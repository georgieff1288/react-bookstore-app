import { db, auth } from '../utils/firebase.config';


export const register = async (data) => {
    let res = '';
    await auth.createUserWithEmailAndPassword(data.email, data.password).then((res) => {
        let  userData = {uid:res.user.uid, email:res.user.email, username:data.username, address:data.address};
        db.doc(`users/${userData.uid}`).set(userData);
    }).catch((err) => {
       res = err.message;
    });
    return res;
};

export const login = async (data) => {
    let res ='';
    await auth.signInWithEmailAndPassword(data.email, data.password)
        .catch((err) => {
            //error = err.message;
            res = 'Invalid email or password.';
        });
    return res;
};

export const logout = async () => {
    await auth.signOut()
        .catch((err) => {
            window.alert(err.message);
        });
};