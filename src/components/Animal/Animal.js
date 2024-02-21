import styles from './Animal.module.scss'
import { useRef, useState } from 'react'


export default function Animal({ animal, updateAnimal, deleteAnimal }){
    const [showInput, setShowInput] = useState(fase)
    const nameInputRef = useRef(null)
    const speciesInputRef = useRef(null)
    const imageInputRef = useRef(null)
    return(
        <div className={styles.animal}> 
          <div className={styles.animalInfoContainer}>
            <div className={styles.animalNameContainer}>
              <h5>{animal.name}</h5>
            </div>
            <div className={styles.animalSpeciesContainer}>
              <p>{animal.species}</p>
            </div>
            <div className={styles.animalImageContainer}>
              <img src={animal.image} alt={`{"Image of a cute ${animal.species} named ${animal.name}"}`}></img>
            </div>
          </div>
            <button 
                className={styles.button}
                onClick={() => setShowInput(!showInput)}
            >
                Update
            </button>
            <button
                className={styles.button}
                onClick={() => deleteAnimal(animal._id)}
            >
                Adopted!
            </button>
            <div className={styles.inputContainer}>
                <input 
                    ref={nameInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        const name = nameInputRef.current.value
                        updateAnimal(animal._id, { name })
                        setShowInput(false)
                    }}
                    defaultValue={animal.name}
                />
                 <input 
                    ref={speciesInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        const species = speciesInputRef.current.value
                        updateAnimal(animal._id, { species })
                        setShowInput(false)
                    }}
                    defaultValue={animal.species}
                />
                 <input 
                    ref={imageInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        const image = imageInputRef.current.value
                        updateAnimal(animal._id, { image })
                        setShowInput(false)
                    }}
                    defaultValue={animal.image}
                />
            </div>
        </div>
    )
}