import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import CardBox from '../../components/CardBox';
import Button from '@mui/material/Button'
import { useRef, useState } from 'react';
import { hard, soft, pj } from '../../database';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Skills() {
    const ref = useRef(null);
    const [value, setValue] = useState(1);
    const [msg, setMsg] = useState(soft);
    const [control, setControl] = useState(true)
    const navigate = useNavigate()

    async function handleMessage(stack) {
        if (stack == pj) {
            return setControl(false)
        } else {
            setControl(true)
            setMsg(stack)
            return
        }
    }

    return (
        <div className='container-skills'>
            <Box sx={{
                pb: 7, display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between'
            }} ref={ref}>
                <Paper
                    className='header-skills'
                    elevation={3}>
                    <BottomNavigation
                        className='header-skills'
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction className='hard-skill' onClick={() => handleMessage(hard)} label="HARD SKILLS" />
                        <BottomNavigationAction className='soft-skill' onClick={() => handleMessage(soft)} label="SOFT SKILLS" />
                        <BottomNavigationAction className='projects' onClick={() => handleMessage(pj)} label="PROJETOS" />
                    </BottomNavigation>
                </Paper>
                <CssBaseline />
                <Fade in={true}>
                    <List className='box-list'>
                        {control
                            ?
                            msg.map(({ title, resume, link }, index) => (
                                <ListItem className='item-box' button key={index + link}>
                                    <ListItemAvatar>
                                        <Avatar className='stack' alt="Stack Picture" src={link} />
                                    </ListItemAvatar>
                                    <ListItemText primary={title} secondary={resume} />
                                </ListItem>
                            ))
                            :
                            <CardBox></CardBox>
                        }
                    </List>
                </Fade>
            </Box>
            <Button
                onClick={() => { navigate('/') }}
                className='logo btn-return'
                variant="contained"
            >
                G
            </Button>
        </div>
    )
}

