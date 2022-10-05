import Fade from '@mui/material/Fade';
import { useState } from 'react';
import Modal from '../../components/Modal'
import Letter from '../../components/Letter';
import './styles.css';

export default function Main() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='container'>
      {openModal && <Modal setOpenModal={setOpenModal}></Modal>}
      <Fade in={true}>
        <div className='container-letter'>
          <Letter old={'Olá.'} novo={'Sobre'} rota={'sobre'} />
          <Letter old={'Sou o'} novo={'Habilidades'} rota={'habilidades'} />
          <Letter old={'Gui'} novo={'Contato'} rota={''} setOpenModal={setOpenModal} />
        </div>
      </Fade>
    </div>
  )
}