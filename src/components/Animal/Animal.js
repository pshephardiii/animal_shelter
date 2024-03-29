import styles from './Animal.module.scss'
import { useRef, useState } from 'react'

export default function Animal({ animal, updateAnimal, deleteAnimal }){
    const [showInput, setShowInput] = useState(false)
    const nameInputRef = useRef(null)
    const speciesInputRef = useRef(null)
    const imageInputRef = useRef(null)
    return(
        <div className={styles.animal}> 

          <div className={styles.animalInfoContainer}>

            <div className={styles.animalNameContainer}>
              <h2 className={styles.animalName}>{animal.name}</h2>
              <h4 className={styles.animalSpecies}>{animal.species}</h4>
            </div>

            <div className={styles.animalImageContainer}>
              <img className={styles.animalImage} src={animal.image} alt={`Image of a cute ${animal.species} named ${animal.name}`}></img>
            </div>

            <div className={styles.buttonContainer}>
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
            </div>
            
            <div className={styles.inputContainer}>
                <input 
                    ref={nameInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const name = nameInputRef.current.value
                          const species = speciesInputRef.current.value
                          const image = imageInputRef.current.value
                          updateAnimal(animal._id, { name, species, image })
                          setShowInput(false)
                        }
                    }}
                    defaultValue={animal.name}
                />
                 <input 
                    ref={speciesInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const name = nameInputRef.current.value
                          const species = speciesInputRef.current.value
                          const image = imageInputRef.current.value
                          updateAnimal(animal._id, { name, species, image })
                          setShowInput(false)
                        }
                    }}
                    defaultValue={animal.species}
                />
                 <input 
                    ref={imageInputRef}
                    style={{ display: showInput ? 'inline-block' : 'none' }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const name = nameInputRef.current.value
                          const species = speciesInputRef.current.value
                          const image = imageInputRef.current.value
                          updateAnimal(animal._id, { name, species, image })
                          setShowInput(false)
                        }
                    }}
                    defaultValue={animal.image}
                />
            </div>
          </div>
        </div>
    )
}