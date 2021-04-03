import { db, auth } from '../firebase.config';


export async function register(data) {
    let error = '';
    await auth.createUserWithEmailAndPassword(data.email, data.password).then((res) => {
        let  userData = {uid:res.user.uid, email:res.user.email, username:data.username, address:data.address};
        db.doc(`users/${userData.uid}`).set(userData);
    }).catch((err) => {
       error = err.message;
    });
    return error;
};

export async function login(data) {
    let error ='';
    await auth.signInWithEmailAndPassword(data.email, data.password)
        .catch((err) => {
            //error = err.message;
            error = 'Invalid email or password.';
        });
    return error;
};

export async function logout() {
    await auth.signOut();
};