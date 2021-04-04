import { storage } from '../utils/firebase.config';

export const uploadImage = (file, fileName) => {
    let storageRef = storage.ref();
    let fileRef = storageRef.child(fileName);
    fileRef.put(file);
};