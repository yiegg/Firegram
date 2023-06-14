import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function ImageGrid({setImg}) {
    const {docs} = useFirestore('images');
    //console.log(docs);
    return (
        <div className="img-grid">
        {docs && docs.map(doc => (
            <div className="img-wrap" key = {doc.id}>
                <img src = {doc.url} onClick={() => setImg(doc.url)}></img>
            </div>
        ))}
        </div>
    );
}