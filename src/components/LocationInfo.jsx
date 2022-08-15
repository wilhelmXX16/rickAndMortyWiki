import React from 'react'

const LocationInfo = ({location, handleSubmit}) => {


    // console.log(location)
  return (
    <article className='header_container'>
      <header className='header_page'>
      <img className='img_header' src='https://images6.alphacoders.com/909/thumb-1920-909641.png' alt="" />
        <h1 className='title_page'>Rick and Morty Wiki</h1>
        <form  className='form_search' onSubmit={handleSubmit}>
          <input className='input_search' id='search' type="number" placeholder='Ingresar un numero del 1 al 126'/>
          <button className='btn'>Search</button>
        </form>
      </header>
      <div className="universe_info">
        <h2 className='title_2'>{location?.name}</h2>
        <ul className='list_info'>
            <li className='list_1'><span>Type</span><br /> {location?.type}</li>
            <li className='list_2'><span>Dimension</span><br /> {location?.dimension}</li>
            <li className='list_3'><span>Population</span><br /> {location?.residents.length}</li>
            
        </ul>
      </div>
    </article>
  )
}

export default LocationInfo