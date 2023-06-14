import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

export default function useFirestore(folder) {
    const[docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(projectFirestore, folder);
        const unsub = onSnapshot(query(collectionRef, orderBy('createdAt', 'desc')),
            (snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            }
        );
        return () => unsub();

    }, [collection])

    return {docs};
}
