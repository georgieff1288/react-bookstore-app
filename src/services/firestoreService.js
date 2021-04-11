import moment from 'moment';
import firebase from 'firebase/app';

import { db } from '../utils/firebase.config';


export const getAllGenres = async () => {
    const items = [];

    await db.collection("genres")
        .orderBy("name")
        .get()
        .then((genres) => { 
            genres.forEach((doc) => {
               items.push({ ...doc.data(), id: doc.id });
            });
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};

export const addEmptyBookDoc = async () => {
    let docId = ''
    await db.collection('books')
        .add({})
        .then((doc) => {
            docId = doc.id;
        })
        .catch((err) => {
            window.alert(err.message);
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

export const getBestSellers = async () =>{
    const items = [];

    await db.collection("books")
        .orderBy("sales", "desc")
        .limit(10)
        .get()
        .then((querySnapshot) => { 
            querySnapshot.forEach((doc) => {                
                items.push({ ...doc.data(), id: doc.id});
            });
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};

export const getAllBooks = async () => {
    const items = [];

    await db.collection("books")
        .orderBy("created", "asc")
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
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};

export const getBooksByGenre = async (genre) => {
    const items = [];

    await db.collection("books")
        .where("genre", "==", genre)
        .orderBy("created", "asc")
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
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};

export const getBookById = async (id) => {
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
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return book;
};

export const addReview = async (id, review) => {
    review.created = moment().format('MMMM Do YYYY, hh:mm:ss');
    await db.collection("books")
        .doc(id).collection("reviews")
        .add(review)
        .then(()=>{
            updateRating(id, review.rating);
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

const updateRating = async (id, rating) => {
    await db.collection("books")
        .doc(id)
        .update({
            sumOfRatings: firebase.firestore.FieldValue.increment(rating),
            numOfRatings: firebase.firestore.FieldValue.increment(1)
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getBookReviews = async (id) => {
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
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};

export const search = async (query) => {
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
    })
    .catch((err) => {
            window.alert(err.message);
    });
    return items;
}; 


export const getUsername = async (id) => {
    let username ='';
    await db.collection("users").doc(id).get().then((doc)=>{
        username = doc.data().username;
    })
    .catch((err) => {
        window.alert(err.message);
    });
    return username;
};

export const getReview = async (bookId, reviewId) => {
    let review = '';
    await db.collection("books").doc(bookId).collection("reviews").doc(reviewId).get().then((doc) => {
        review = doc.data();
    })
    .catch((err) => {
        window.alert(err.message);
    });
    return review;
};

export const updateReview = async (bookId, review, reviewId, oldRating) => {
    await db.collection("books")
        .doc(bookId)
        .collection("reviews")
        .doc(reviewId)
        .update(review)
        .then(() => {
            updateBookRating(bookId, oldRating, review.rating)
        }).catch((err) => {
            window.alert(err.message)
        });
};

const updateBookRating = async (bookId, oldRating, newRating) => {
    let rating = 0 - oldRating + newRating;
    await db.collection("books")
            .doc(bookId)
            .update({
            sumOfRatings: firebase.firestore.FieldValue.increment(rating)
        }).catch((err) => {
            window.alert(err.message)
        });
};

export const didUserWriteReview = async (bookId, userId) => {
    let reviewId = null
    await db.collection("books")
        .doc(bookId)
        .collection("reviews")
        .where("creatorId", "==", userId)
        .limit(1)
        .get()
        .then((reviews) => {
            reviews.forEach((doc) => {
                if(doc.id){
                    reviewId = doc.id;
                    return reviewId;
                }
            });
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return reviewId;
};


export const deleteReview = async (bookId, reviewId, rating) => {
    let bookRef = db.collection("books").doc(bookId);
    await bookRef
            .collection("reviews")
            .doc(reviewId)
            .delete()
            .then(() => {
                bookRef
                .update({
                    sumOfRatings: firebase.firestore.FieldValue.increment(-rating),
                    numOfRatings: firebase.firestore.FieldValue.increment(-1)
                })
            })
            .catch((err) => {
                window.alert(err.message);
            });
};

export const orderBooks = async (userId, books, totalPrice) => {    
    let date = moment().format('MMMM Do YYYY');
    let docId = '';
    await db.collection("orders")
        .add({creator: userId, date: date, totalPrice:totalPrice})
        .then((doc) => {
            docId = doc.id;
        })
        .then(() => {
            books.forEach(book => {
                db.collection("orders")
                    .doc(docId)
                    .collection("books")
                    .add({author:book.author, title:book.title, price:book.price});
            });
        })
        .then(() => {
            books.forEach(book=> {
                db.collection("books").doc(book.id).update({
                    sales: firebase.firestore.FieldValue.increment(1)
                });
            });
        })
        .then(() =>{
            window.alert("Your order has been sent successfully.");
        })
        .catch((err) => {
            window.alert(err.message);
        });
};

export const getUserOrders = async (userId) => {
    let orders = [];
    let order = {}; 
    await db.collection("orders")
    .where("creator", "==", userId)
    .orderBy("date", "desc")
    .get()
    .then((resOrder) => {
        resOrder.forEach((doc) => {
            order.date = doc.data().date;
            order.totalPrice = doc.data().totalPrice;
            order.id = doc.id
            orders.push({...order});
                     
        });
    })
    .catch((err) => {
        window.alert(err.message);
    });
    return orders;   
};

export const getOrderBooks = async (orderId) => {
    let items = [];
    await db.collection("orders")
        .doc(orderId)
        .collection("books")
        .get()
        .then((books) => {
            books.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id});
            });
        })
        .catch((err) => {
            window.alert(err.message);
        });
    return items;
};