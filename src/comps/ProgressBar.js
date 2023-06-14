import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

export default function ProgressBar({file, setFile}) {
    //upload file to database, url was initially null, it only carries value after upload completes
    const {url, progress} = useStorage(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    },[url, setFile]);

    return (
        <div className="progress-bar" style={{width: progress + '%' }}>
            
        </div>
    );
}