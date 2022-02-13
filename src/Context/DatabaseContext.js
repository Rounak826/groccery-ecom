import { collection, addDoc, doc, setDoc, deleteDoc, getDoc, getDocs, query, where ,orderBy,updateDoc, onSnapshot  } from "firebase/firestore";
import { getStorage, ref, uploadBytes,getDownloadURL,listAll,deleteObject  } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
import React, {useContext } from 'react';
import { useState } from "react";
const DatabaseContext = React.createContext();
export function useDatabase(){
    return useContext(DatabaseContext);
}

export default function DataProvider({children}) {
    let [reload,setReload] = useState(false);
    const db = getFirestore();
    const storage = getStorage();
    //creates/overwrites a document in specified collection with specified doc ID
    function createDocWithId(collectionName, docID, data) {
        return setDoc(doc(db, collectionName, docID), data);
    }
    function createNestedDocWithId(collectionName1, docID1,collectionName2, docID3, data) {
        return setDoc(doc(db, collectionName1, docID1,collectionName2, docID3,), data);
    }
    //creates a document in specified collection with auto Generated doc Id
    function createDocWithoutId(collectionName, data) {
        return addDoc(collection(db, collectionName), data);
    }
    //updates a document in specified collection with specified doc ID
    function updateDocWithId(collectionName, docID, data) {
        return updateDoc(doc(db, collectionName, docID), data);
    }
    function updateNestedDocWithId(collectionName1, docID1,collectionName2, docID3, data) {
        return updateDoc(doc(db, collectionName1, docID1,collectionName2, docID3,), data);
    }
    //delete a document in specified collection and docId
    function deleteDocWithID(collectionName, docID) {
        return deleteDoc(doc(db, collectionName, docID));
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
    //Gets All the documents of specified collection
    function getAllDocs(collectionName) {
       // returns Array of documents from collection
        return getDocs(collection(db, collectionName));
        
    }
    function getAllNestedDocsRealTime(collectionName1,docID1,collectionName2) {
    // returns Array of documents from collection in realtime
         return onSnapshot(collection(db, collectionName1,docID1,collectionName2));;
         
     }
    function getAllNestedDocs(collectionName1,docID1,collectionName2) {
        // returns Array of documents from collection
         return getDocs(collection(db, collectionName1,docID1,collectionName2));
         
     }
    //Query specific documents from collection
    function queryCollection(collectionName,field1,operator, value) {
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
        const q = query(collectionRef, where(field1, operator, value));
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
     //get image url
     function getImageURL(path){
        const imageRef = ref(storage, path);
        return getDownloadURL(imageRef)

     }
     function deleteImage(path){
        const imageRef = ref(storage, path);
        return deleteObject(imageRef)

     }
     function getImageList(path){
        const imageRef = ref(storage, path);
        return listAll(imageRef);

     }
    const value = {
        reload,
        setReload,
        createDocWithId,
        createNestedDocWithId,
        createDocWithoutId,
        updateDocWithId,
        updateNestedDocWithId,
        getAllNestedDocs,
        deleteDoc,
        deleteDocWithID,
        getAllDocs,
        getAllNestedDocsRealTime,
        getDocWithID,
        queryCollection,
        getDocInOrder,
        uploadImage,
        getImageURL,
        getImageList,
        deleteImage
    }
    return (
        <DatabaseContext.Provider value={value}>
            {children}
        </DatabaseContext.Provider>
    )

}
