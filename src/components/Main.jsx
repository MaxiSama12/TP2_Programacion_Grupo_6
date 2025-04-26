import React from 'react'

const Main = ({integrantes}) => {
  return (
    <div>
      <h1>Integrantes del grupo</h1>
      {integrantes.map((integrante, index) => (
        <div key={index}>
          <h2>{integrante.nombre} {integrante.apellido}</h2>
          <p>Legajo: {integrante.legajo}</p>
          <a href={integrante.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <img src={integrante.foto} alt={`${integrante.nombre} ${integrante.apellido}`} />
        </div>
      ))}
    </div>
  )
}

export default Main;