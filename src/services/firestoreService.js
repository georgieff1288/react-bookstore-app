import moment from 'moment';

import { db } from '../utils/firebase.config';


export const getAllGenres = (setState, setLoader) => {
    const items = [];

    db.collection("genres")
        .orderBy("name")
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
               items.push({ ...doc.data(), id: doc.id });
            });
            setState(items);
            if(setLoader){
                setLoader('hide');
            };
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const addEmptyBookDoc = async () => {
    let docId = ''
    await db.collection('books')
        .add({})
        .then((doc) => {
            docId = doc.id;
        });
    return docId;
};

export const setBookFields = async (book, docId) => {
    book.searchName = book.author + ' ' + book.title;
    book.numOfRatings = 0;
    book.sumOfRatings = 0;
    book.sales = 0;
    book.created = moment().format("MMM Do YYYY");
    db.collection('books').doc(docId).set(book)
        .then(()=>{
            window.alert('The book was successfully added.');
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getBestSellers = (setState, setLoader) =>{
    const items = [];

    db.collection("books")
        .orderBy("sales", "desc")
        .limit(10)
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {                
                items.push({ ...doc.data(), id: doc.id});
            });
            setState(items);
            if(setLoader){
                setLoader('hide');
            };
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getAllBooks = (setState, setLoader) => {
    const items = [];

    db.collection("books")
        .orderBy("created", "desc")
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
                let calcRating = 0;  
                if(doc.data().sumOfRatings > 0){
                    calcRating = doc.data().sumOfRatings/doc.data().numOfRatings;
                }
                items.push({ ...doc.data(), id: doc.id, rating:calcRating});
            });
            setState(items);
            if(setLoader){
                setLoader('hide');
            }
        })
        .catch((err) => {
            window.alert(err.message);
        });
};


