import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const[img, setImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setImg = {setImg}/>
      {img && <Modal src = {img} setImg = {setImg}/>}
    </div>
  );
}

export default App;
