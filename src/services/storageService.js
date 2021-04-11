import { storage } from '../utils/firebase.config';

import { setBookFields } from './firestoreService';

export const uploadImage = async (file, book, docId) => {
    let storageRef = storage.ref();
    let fileRef = storageRef.child(docId);
    await fileRef.put(file)
        .then(() => {
            setImageSrc(book, docId);
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const setImageSrc = async (book, docId) => {
    let storageRef = storage.ref();
    await storageRef.child(docId)
        .getDownloadURL()
        .then((url)=>{
            book.imgSrc = url;
            setBookFields(book, docId);
        })
        .catch((err) => {
            window.alert(err.message);
        });
};
