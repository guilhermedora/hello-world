import './styles.css'
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Clear from '../../assets/clear-btn.svg'
import Close from '../../assets/close-btn.svg'
import Git from '../../assets/git-btn.svg'
import Linkedin from '../../assets/linkedin-btn.svg'
import Link from '@mui/material/Link';
import { useState } from 'react';
import api from '../../Api'

export default function Modal({ setOpenModal }) {
    const [forms, setForms] = useState({
        nome: '',
        email: '',
        mensagem: ''
    })

    function handleOpen() {
        setOpenModal(false)
    }

    function handlerInputChange(e) {
        setForms({ ...forms, [e.target.name]: e.target.value });
        // console.log(forms);
    }

    const handlerClear = () => {
        setForms({
            nome: '',
            email: '',
            mensagem: ''
        })
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();
        if (
            forms.nome === forms.email ||
            forms.email === '' ||
            forms.nome === '' ||
            forms.mensagem === ''
        ) {
            return
        }
        try {
            await api.post("/enviar", forms);
            setOpenModal(false)
        } catch (error) {
            return
        }
    };
    return (
        <Fade in={true}>
            <div className='bg-contact' >
                <div className='card-contact'>
                    <img id='clear' src={Clear} alt='clear button' onClick={() => handlerClear()}></img>
                    <img id='close' src={Close} alt='close button' onClick={() => handleOpen()}></img>
                    <h1>
                        Está buscando um desenvolvedor em ascensão para a sua empresa ou projeto?
                        <span> I am here!</span>
                        <div className='nav-contact'>
                            <Link href='https://www.linkedin.com/in/guilhermedora/' target="_blank">
                                <img alt='linkedin button' id='linkedin' src={Linkedin}></img>
                            </Link>
                            <Link href='https://github.com/guilhermedora' target="_blank">
                                <img alt='github button' id='github' src={Git}></img>
                            </Link>
                        </div>
                        De qualquer forma, se você tem uma outra requisição, pergunta,
                        sugestão ou feedback não exite em mandar uma mensagem. <span> =)</span>
                    </h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 3, height: '3rem' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='name-email'>
                            <TextField
                                name='nome'
                                color="success"
                                id="outlined-basic"
                                label="Nome"
                                variant="outlined"
                                value={forms.nome}
                                onChange={(e) => handlerInputChange(e)}
                            />
                            <TextField
                                name='email'
                                color="success"
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                value={forms.email}
                                onChange={(e) => handlerInputChange(e)}
                            />
                        </div>
                        <TextField
                            name='mensagem'
                            color="success"
                            id="outlined-multiline-flexible"
                            rows={7} label="Mensagem"
                            multiline variant="outlined"
                            value={forms.mensagem}
                            onChange={(e) => handlerInputChange(e)}
                        />
                    </Box>
                </div>
                <button onClick={(e) => handlerSubmit(e)}>Enviar</button>
            </div>
        </Fade >
    );
}