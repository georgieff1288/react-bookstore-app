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
    let query = book.author + ' ' + book.title;
    book.searchName = query.toLowerCase();
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
        .orderBy("created", "desc")
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {
                let calcRating = 0;  
                if(doc.data().sumOfRatings > 0){
                    calcRating = doc.data().sumOfRatings/doc.data().numOfRatings;
                    calcRating = Math.round(calcRating * 100) / 100;
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
        .orderBy("created", "desc")
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

export const getBookById = async (id, setState, setLoader) => {
    let book ='';
    await db.collection("books")
        .doc(id)
        .get()
        .then((res) => {
            let calcRating = 0;  
            if(res.data().sumOfRatings > 0){
                calcRating = res.data().sumOfRatings/res.data().numOfRatings;
                calcRating = Math.round(calcRating * 100) / 100;
            }
            book = res.data();
            book.rating = calcRating;
            setState(book);
            setLoader('hide');
        });
};

export const addReview = async (id, review) => {
    review.created = moment().format('MMMM Do YYYY, hh:mm:ss');
    await db.collection("books")
        .doc(id).collection("reviews")
        .add(review)
        .then(()=>{
            updateRating(id, review.rating);
        }).then(()=>{
            db.collection("users")
                .doc(review.creatorId)
                .collection("reviews")
                .add({bookId: id});
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
                let date = doc.data().created.slice(0, -10);
                items.push({ ...doc.data(), id: doc.id,created: date });
            });
            setState(items);
        });
};

export const search = async (query, setState, setLoader) => {
    let items = [];
    query = query.toLowerCase();
    await db.collection("books").get().then((res) => {
        res.forEach((doc)=>{
            let str = doc.data().searchName;
            if(str.includes(query)){
                let calcRating = 0;  
                if(doc.data().sumOfRatings > 0){
                    calcRating = doc.data().sumOfRatings/doc.data().numOfRatings;
                    calcRating = Math.round(calcRating * 100) / 100;
                }
                items.push({ ...doc.data(), id: doc.id, rating:calcRating});
            };            
        });
            setState(items);
            setLoader('hide');
    });
}; 


export const getUsername = async (id, setState) => {
    await db.collection("users").doc(id).get().then((doc)=>{
        let username = doc.data().username;
        setState(username);
    });
};

export const getReview = async (bookId, reviewId, setState) => {
    await db.collection("books").doc(bookId).collection("reviews").doc(reviewId).get().then((doc) => {
        setState(doc.data());
    });
};

export const updateReview = async (bookId, review, reviewId, oldRating) => {
    await db.collection("books")
        .doc(bookId)
        .collection("reviews")
        .doc(reviewId)
        .update(review)
        .then(() => {
            updateBookRating(bookId, oldRating, review.rating)
        }).catch((err)=>{window.alert(err.message)});
};

const updateBookRating = async (bookId, oldRating, newRating) => {
    let rating = 0 - oldRating + newRating;
    await db.collection("books")
            .doc(bookId)
            .update({
            sumOfRatings: firebase.firestore.FieldValue.increment(rating)
        }).catch((err)=>{window.alert(err.message)});
};

export const didUserWriteReview = async (bookId, userId) => {
    let obj = {
        check: false,
        reviewId:''
    };
    await db.collection("books")
        .doc(bookId)
        .collection("reviews")
        .get().then((reviews) => { 
            reviews.forEach((doc) => {                
                if(doc.data().creatorId === userId){
                    obj.check = true;
                    obj.reviewId = doc.id;
                    return obj;
                }
            });
        });
    return obj;
};