import Image from "next/image";
import classes from './ImageGallery.module.css'
import Modal from "./Modal";
import { useState } from "react";

interface ImageGalleryProps{
  imageURL:string
}

export default function ImageGallery({imageURL}:ImageGalleryProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function closeModal(){
    setModalIsOpen(false)
  }

  return (
    <main>
      <div>
        {modalIsOpen && <Modal imageModal={imageURL} closeModal={closeModal} />}
      </div>

      <div className={classes.main}>
        <Image src={imageURL} width={300} height={300} alt="Image Galley" onClick={()=>(setModalIsOpen(true))} />
      </div>
      
    </main>
  )
}
