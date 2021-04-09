import { storage } from '../utils/firebase.config';

import { setBookFields } from './firestoreService';

export const uploadImage = (file, book, docId) => {
    let storageRef = storage.ref();
    let fileRef = storageRef.child(docId);
    fileRef.put(file)
        .then(() => {
            setImageSrc(book, docId);
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const setImageSrc = (book, docId) => {
    let storageRef = storage.ref();
    storageRef.child(docId)
        .getDownloadURL()
        .then((url)=>{
            book.imgSrc = url;
            setBookFields(book, docId);
        })
        .catch((err) => {
            window.alert(err.message);
        });
};
