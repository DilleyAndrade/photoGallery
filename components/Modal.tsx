import Image from "next/image";
import classes from './Modal.module.css'
import { ArrowUUpLeft } from "@phosphor-icons/react";

interface ModalProps{
  imageModal:string
  closeModal:any
}

export default function Modal({imageModal,closeModal}:ModalProps) {
  return (
    <div className={classes.modal}>
      <div>
        <Image 
          src={imageModal} 
          width={600}
          height={600}
          alt="Modal Image"
          priority
        />
      </div>
      <button
        className={classes.button}
        onClick={closeModal}
      >
        <ArrowUUpLeft size={30} weight="bold" />
        Return
      </button>
    </div>
  )
}
