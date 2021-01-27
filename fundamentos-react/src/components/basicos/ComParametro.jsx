import React from 'react';

export default function ComParametro(props) {
  console.log(props)
  const { titulo, aluno, nota } = props
  return (
    <div>
      <h2>{ titulo }</h2>
      <h3>{ aluno } tem nota { nota }</h3>
    </div>
  )
}