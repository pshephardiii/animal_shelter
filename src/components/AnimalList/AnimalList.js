import styles from './AnimalList.module.scss'
import Animal from '../Animal/Animal'
 
export default function AnimalList ({ 
    newAnimal, 
    createAnimal, 
    setNewAnimal, 
    animals,
    deleteAnimal,
    updateAnimal
}){
    return(
        <div className={styles.animallist}>
            Add New Animal:<input 
            className={styles.input}
            id="name-input"
            type="text" 
            value={newAnimal.name} 
            placeholder="name"
            onChange={(e) => {
                setNewAnimal({...newAnimal, name: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
            <input 
            className={styles.input}
            id="species-input"
            type="text" 
            value={newAnimal.species} 
            placeholder="species"
            onChange={(e) => {
                setNewAnimal({...newAnimal, species: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
            <input 
            className={styles.input}
            id="image-input"
            type="text" 
            value={newAnimal.image} 
            placeholder="image URL"
            onChange={(e) => {
                setNewAnimal({...newAnimal, image: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
             <h3>Animals up for Adoption</h3>
        {animals.map(animal => (
            <Animal 
                key={animal._id} 
                animal={animal}
                updateAnimal={updateAnimal}
                deleteAnimal={deleteAnimal}
            />
        ))}
        </div>
    )
}