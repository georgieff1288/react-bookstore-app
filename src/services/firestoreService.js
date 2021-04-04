import { db } from '../utils/firebase.config';


export const getAllGenres = (setState) => {
    const items = [];

    db.collection("genres")
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
               items.push({ ...doc.data(), id: doc.id });
            });
            setState(items); 
         });
};
