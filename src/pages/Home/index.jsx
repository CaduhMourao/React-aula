import { useState } from 'react'
import './styles.css';

import { Card } from '../../components/Card';

export function Home() {
  let studentName ='';

  function handleNameChange(name) {
    studentName = name;
  }

  return (
    <div className='container'>
      <h1>Lista de presença</h1>

      <input 
        type="text" 
        placeholder='Digite um nome...' 
        onChange={e => handleNameChange(e.target.value)}
      />

      <button>Adicionar</button>

      <Card name='Carlos' time='10:55:55' />
      <Card name='João' time='11:00:10' />

    </div>
  )
}
