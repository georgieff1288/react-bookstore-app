import moment from 'moment';
import firebase from 'firebase/app';

import { db } from '../utils/firebase.config';


export const getAllGenres = async (setState, setLoader) => {
    const items = [];

    await db.collection("genres")
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
    await db.collection('books').doc(docId).set(book)
        .then(()=>{
            window.alert('The book was successfully added.');
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getBestSellers = async (setState, setLoader) =>{
    const items = [];

    await db.collection("books")
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

export const getAllBooks = async (setState, setLoader) => {
    const items = [];

    await db.collection("books")
        .orderBy("created")
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
            setLoader('hide');
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getBooksByGenre = (genre, setState, setLoader) => {
    const items = [];

    db.collection("books")
        .where("genre", "==", genre)
        .orderBy("created")
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id});
            });
            setState(items);
            setLoader('hide');
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getBookById = async (id, setState) => {
    let book ='';
    await db.collection("books")
        .doc(id)
        .get()
        .then((res) => {
            let calcRating = 0;  
            if(res.data().sumOfRatings > 0){
                calcRating = res.data().sumOfRatings/res.data().numOfRatings;
            }
            book = res.data();
            book.rating = calcRating;
            setState(book);
        });
};

export const addReiew = async (id, review) => {
    review.created = moment().format("MMM Do YYYY");
    await db.collection("books")
        .doc(id).collection("reviews")
        .add(review)
        .then(()=>{
            updateRating(id, review.rating);
        });
};

const updateRating = (id, rating) => {
    db.collection("books")
        .doc(id)
        .update({
            sumOfRatings: firebase.firestore.FieldValue.increment(rating),
            numOfRatings: firebase.firestore.FieldValue.increment(1)
        });
};

export const getBookReviews = async (id, setState) => {
    const items = [];
    await db.collection("books")
        .doc(id)
        .collection("reviews")
        .orderBy("created", "desc")
        .get()
        .then((res) => {
            res.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id});
            });
            setState(items);
        });
};


