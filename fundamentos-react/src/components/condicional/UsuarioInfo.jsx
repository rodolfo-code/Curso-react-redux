import React from 'react'

const UsuarioInfo = (props) => {
  return (
    <div>
      Seja bem vindo <strong>{props.usuario.nome}</strong>
    </div>
  )
}

export default UsuarioInfo
