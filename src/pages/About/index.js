import './styles.css'
import Box from '@mui/material/Box';
import { Fade } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

export default function About() {
    const navigate = useNavigate()

    return (
        <Fade in={true}>
            <div className='container-about'>
                <Box
                    className='aside'
                    sx={{
                        '& > :not(style)': {
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-around'
                        },
                    }}
                >
                    <Paper elevation={5}>
                        <Button
                            onClick={() => { navigate('/') }}
                            className='logo'
                            variant="contained"
                        >
                            G
                        </Button>
                        <div className='box-txt'>
                            <h1>INTRO</h1><br />
                            <p>
                                Pernambucano, Brasileiro.<br></br>
                                Moro em Recife, tenho 29 anos.<br></br>
                                Gosto de ambientes calmos e
                                música agitada.
                            </p>
                        </div>
                        <div className='social'>
                            <Link href='https://www.instagram.com/guilhermedora' target="_blank">
                                <Button
                                    className='insta'
                                    variant="contained"
                                >
                                </Button>
                            </Link>
                            <Link href='https://twitter.com/GuilhermDora' target="_blank">
                                <Button
                                    className='twitter'
                                    variant="contained"
                                >
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Box>
                <div className='about-text'>
                    <p>
                        Olá, meu nome é Guilherme mas pode me chamar de
                        Gui, sou formado em engenharia mecatrônica e estou em
                        transição de carreira para Dev Frontend. Após me sentir
                        deslocado no seguimento que havia adotado decidi seguir o
                        coração e me tornar de fato um Dev! A escolha veio de
                        maneira natural, sempre adorei interagir com diferentes
                        linguagens e utilizar a lógica de programação na minha trajetória.
                        <br></br><br></br>
                        Não gosto de me definir pelo trabalho que fiz, eu me defino
                        pelo trabalho que quero fazer. Habilidades podem ser
                        ensinadas, personalidade é inerente. Prefiro continuar
                        aprendendo, continuar me desafiando e fazer coisas
                        interessantes que importam.
                        <br></br><br></br>
                        Sou um espírito leve, expressivo e multitalentoso, com uma
                        capacidade natural de se manter tranquilo independente da
                        situação. Tenho paixão por fluxos de trabalho organizado e
                        resolução de problemas complexos e acredito que deixar o ego
                        de lado para criar uma experiência que atenda às necessidades
                        do cliente é o que deve impulsionar um projeto.
                        <br></br><br></br>
                        Cya!
                    </p>
                </div>
            </div>
        </Fade>
    )
}