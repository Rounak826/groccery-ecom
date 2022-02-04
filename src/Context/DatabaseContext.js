import { collection, addDoc, doc, setDoc, deleteDoc, getDoc, getDocs, query, where ,orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import React, {useContext } from 'react';
const DatabaseContext = React.createContext();
export function useDatabase(){
    return useContext(DatabaseContext);
}

export default function DataProvider({children}) {
    const db = getFirestore();
    const storage = getStorage();
    //creates/updates a document in specified collection with specified doc ID
    function createDocWithId(collection, docID, data) {
        return setDoc(doc(db, collection, docID), data);
    }
    //creates a document in specified collection with auto Generated doc Id
    function createDocWithoutId(collectionName, data) {
        return addDoc(collection(db, collectionName), data);
    }
    //delete a document in specified collection and docId
    function deleteDocWithID(collection, docID) {
        return deleteDoc(doc(db, collection, docID));
    }
    //get document with docID from specified collection
    function getDocWithID(collection, docID) {
        let docRef = doc(db, collection, docID);
        return getDoc(docRef);

        /*if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }*/

    }
    //Gets All the documents of specified field
    function getAllDocs(collection) {
       // returns Array of documents from collection
        return getDocs(collection(db, "cities"));
        
    }
    //Query specific documents from collection
    function queryCollection(collectionName,field1,operator, feild2) {
        //operators available
        /* 
        < less than
        <= less than or equal to
        == equal to
        > greater than
        >= greater than or equal to
        != not equal to
        array-contains
        array-contains-any
        in
        not-in
        */
        //for more info refer https://firebase.google.com/docs/firestore/query-data/queries?authuser=0#query_operators
        const collectionRef = collection(db, collectionName);
        // create query
        const q = query(collectionRef, where(field1, operator, feild2));
        // returns Array of documents from collection which satisfies specified query
        return getDocs(q)
         
     }
     //get ordered array of documents from list based on a field
     function getDocInOrder(collectionName,fieldName,order){
        const collectionRef = collection(db, collectionName);

        if(order==='desc'){
            const q = query(collectionRef, orderBy(fieldName,order ));
            return getDocs(q)
        }else{
            const q = query(collectionRef, orderBy(fieldName));
            return getDocs(q)
        }
        

     }
     //upload Image to specified ref
     function uploadImage(path, image){
        const imageRef = ref(storage, path);
        return uploadBytes(imageRef, image);

     }
    
    const value = {
        createDocWithId,
        createDocWithoutId,
        deleteDoc,
        deleteDocWithID,
        getAllDocs,
        getDocWithID,
        queryCollection,
        getDocInOrder,
        uploadImage
    }
    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )

}
