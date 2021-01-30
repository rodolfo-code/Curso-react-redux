import React from 'react';
import alunos from '../../data/alunos';

const ListaAlunos = (props) => {
  const lis = alunos.map((aluno) => <li key={aluno.id}>{aluno.id}){aluno.nome} - {aluno.nota}</li>)
  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {lis}
      </ul>
    </div>
  );
};

export default ListaAlunos;