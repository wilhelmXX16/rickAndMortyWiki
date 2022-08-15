import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

const resident = useFetch(url)

// console.log(resident)

  return (
    <article className='cards'>
        <header className='header_card'>
          <img className='img_card' src={resident?.image} alt={`image of ${resident?.name}`} />
          <div className='circle_status'>
            <span>{resident?.status}</span>
          </div>
        </header>
        <div className='info_card'>
          <h3 className='name'>{resident?.name}</h3>
          <hr />
          <ul className='list_card'>
            <li><span>Raza</span><br />
            {resident?.species}
            </li>
            <li><span>Origin</span><br />
            {resident?.origin.name}
            </li>
            <li><span>Episodes wher appear</span><br />
            {resident?.episode.length}
            </li>
          </ul>
        </div>
    </article>
  )
}

export default CardResident