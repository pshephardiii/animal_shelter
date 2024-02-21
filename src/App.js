import { useState, useEffect } from 'react'
import AnimalList from './components/AnimalList/AnimalList'
import styles from './App.module.scss'


export default function App(){
    const [animals, setAnimals] = useState([])
    const [newAnimal, setNewAnimal] = useState({
        name: '',
        species: '',
        image: '',
        reservedForAdoption: false
    })

    const createAnimal = async () => {
        const body = {...newAnimal}
        try {
            const response = await fetch('/api/animals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdAnimal = await response.json()
            const animalsCopy = [createdAnimal,...animals]
            setAnimals(animalsCopy)
            setNewAnimal({
                name: '',
                species: '',
                image: '',
                reservedForAdoption: false
            })
        } catch (error) {   
            console.error(error)
        }
    }

    const deleteAnimal = async (id) => {
        try {
            const index = animals.findIndex((animal) => animal._id === id)
            const animalsCopy = [...animals]
            const response = await fetch(`/api/animals/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            animalsCopy.splice(index, 1)
            setAnimals(animalsCopy)
        } catch (error) {
            console.error(error)
        }
    }

    const updateAnimal = async (id, subject) => {
        try {
            const response = await fetch(`/api/animals/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const index = animals.findIndex((animal) => id === animal._id)
            const animalsCopy = [...animals]
            const data = await response.json()
            animalsCopy[index] = {...animalsCopy[index], ...subject }
            setAnimals(animalsCopy)
        } catch (error) {
            console.error(error)
        }
    }

    const getAnimals = async () => {
        try{
            const response = await fetch('/api/animals')
            const foundAnimals = await response.json()
            setAnimals(foundAnimals.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getAnimals()
    }, [])
    return(
        <>
			
            <div className={styles.banner}>
                <h1>Welcome to Sunny Animal Shelter!</h1>
              <img src='https://imgur.com/Wzz1JBe.png'/>
            </div>
            <AnimalList
            newAnimal={newAnimal}
            setNewAnimal={setNewAnimal}
            createAnimal={createAnimal}
            animals={animals}
            updateAnimal={updateAnimal}
            deleteAnimal={deleteAnimal}
            />
        </>
    )
}