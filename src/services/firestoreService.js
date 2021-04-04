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
         });
};

export const addBook = async (book) => {
    book.searchName = book.author + ' ' + book.title;
    book.numOfRatings = 0;
    book.sumOfRatings = 0;
    book.sales = 0;
    let imageName = '';
    await db.collection('books').add(book).then((doc) => {
        imageName = doc.id;
    });
    return imageName;
};
