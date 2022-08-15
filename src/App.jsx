import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    let numberLocation 
    if(searchInput === ''){
      numberLocation = Math.ceil(Math.random() * (126 - 1) + 1)
    }else{
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [searchInput])
  
  //busqueda por input

  const handleSubmit = e =>{
    e.preventDefault()
  
    setSearchInput(e.target.search.value)
  }


//console.log(searchInput)
// console.log(location)

  return (
    <div className="App">
      <LocationInfo location={location} handleSubmit={handleSubmit} />
      <div className='card__container'>
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url = {url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
