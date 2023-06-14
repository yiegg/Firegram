
import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const[progress, setProgress] = useState(0);
    const[error, setError] = useState(null);
    const[url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');

        uploadBytesResumable(storageRef, file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, () => {
            getDownloadURL(storageRef).then((url) => 
            {   addDoc(collectionRef, {url, createdAt: timestamp});
                setUrl(url);
            });
        })
    },[file]);

    return {progress, url, error};
}

export default useStorage;