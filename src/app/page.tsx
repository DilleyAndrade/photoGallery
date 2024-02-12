'use client'

import GalleryContext from "@/context/context";
import Header from "../../components/Header";
import { useState } from "react";
import { animalList } from "../../components/animalList";
import { natureList } from "../../components/natureList";
import { cityList } from "../../components/cityList";
import Footer from "../../components/Footer";
import ImageGallery from "../../components/ImageGallery";
import classes from './page.module.css'


export default function Home() {

  const dataAnimal = animalList
  const dataNature = natureList
  const dataCity = cityList
  const [animalSelected, setAnimalSeleted] = useState(true)
  const [natureSelected, setNatureSeleted] = useState(false)
  const [citySelected, setCitySeleted] = useState(false)


  return (
    <>
      <GalleryContext.Provider value={{animalSelected, setAnimalSeleted, natureSelected, setNatureSeleted, citySelected, setCitySeleted}}>
        <header>
          <Header />
        </header>
        <main>
          <div className={classes.showImages}>
            {animalSelected  && 
              dataAnimal.map((item)=>(
                <ImageGallery 
                  key={item.name}
                  imageURL={item.name}
                />
              ))
            }
          </div>

          <div className={classes.showImages}>
            {natureSelected  && 
              dataNature.map((item)=>(
                <ImageGallery 
                  key={item.name}
                  imageURL={item.name}
                />
              ))
            }
          </div>

          <div className={classes.showImages}>
            {citySelected  && 
              dataCity.map((item)=>(
                <ImageGallery 
                  key={item.name}
                  imageURL={item.name}
                />
              ))
            }
          </div>

        </main>

        <footer>
            <Footer />
        </footer>
      </GalleryContext.Provider>
    </>
  );
}
