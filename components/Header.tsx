'use client'

import { useContext } from 'react'
import classes from './Header.module.css'
import ImageGallery from './ImageGallery'
import { GithubLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import GalleryContext from '@/context/context'


export default function Header() {

  const { animalSelected, setAnimalSeleted, natureSelected, setNatureSeleted, citySelected, setCitySeleted }:any = useContext(GalleryContext)

  function animalsActivate(){
    setAnimalSeleted(true)
    setNatureSeleted(false)
    setCitySeleted(false)
  }

  function natureActivate(){
    setAnimalSeleted(false)
    setNatureSeleted(true)
    setCitySeleted(false)
  }

  function cityActivate(){
    setAnimalSeleted(false)
    setNatureSeleted(false)
    setCitySeleted(true)
  }
  
  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        
        <div>
          <h1><span>Photo</span> Gallery</h1>
          <p>For everyone</p>
        </div>
        
        <div className={classes.icons}>
          <a href="https://www.linkedin.com/in/dilley-andrade/" target='_blank'><LinkedinLogo size={25} color='#808080' /></a>
          <a href="https://www.instagram.com/dilleyandrade/" target='_blank'><InstagramLogo size={25} color='#808080' /></a>
          <a href="https://www.youtube.com/@dilleyandrade" target='_blank'><YoutubeLogo size={25} color='#808080' /></a>
          <a href="https://github.com/DilleyAndrade" target='_blank'><GithubLogo size={25} color='#808080' /></a>
        </div>

      </div>
      <nav className={classes.navegation}>

        <button 
          className={ animalSelected ? `${classes.button} ${classes.active}`: `${classes.button}`}
          onClick={animalsActivate}
        >
          Animals
        </button>

        <button 
          className={ natureSelected ? `${classes.button} ${classes.active}`: `${classes.button}`}
          onClick={natureActivate}
        >
          Nature
        </button>

        <button 
          className={ citySelected ? `${classes.button} ${classes.active}`: `${classes.button}`}
          onClick={cityActivate}
        >
          City
        </button>
      </nav>

      

      
      

    </header>
  )
}
