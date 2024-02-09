import { createContext, useContext } from "react";
import { db } from "../config/firebaseConfig";
import {
    collection,
    getDocs,
    // addDoc,
    // updateDoc,
    // deleteDoc,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

const FirestoreContext = createContext();

export function useFirestore() {
    return useContext(FirestoreContext);
}

export function FirestoreProvider({ children }) {

    const getTeamData = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            return data;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return [];
        }
    };

    const uploadUserData = async (collectionName, docId, data) => {
        try {
            const docRef = doc(db, collectionName, docId);
            await setDoc(docRef, data);

            return true;
        } catch (error) {
            console.error("Error adding document: ", error);
            return false;
        }
    };

    const getDocumentData = async (collectionName, docId) => {
        try {
            const docRef = doc(db, collectionName, docId);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists()) {
                return docSnapshot.data();
            } else {
                console.error("Document does not exist");
                return null;
            }
        } catch (error) {
            console.error("Error getting document: ", error);
            return null;
        }
    };

    const value = {
        uploadUserData,
        getTeamData,
        getDocumentData
    };

    return (
        <FirestoreContext.Provider value={value}>
            {children}
        </FirestoreContext.Provider>
    );
}
