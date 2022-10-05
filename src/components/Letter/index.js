import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Letter({ old, novo, rota, setOpenModal }) {
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate()

    const handleChange = () => {
        setChecked(!checked);
    };

    function contats() {
        if (rota === '') {
            return setOpenModal(true)
        }
        navigate(`./${rota}`)
    }

    return (
        <Box sx={{
            '& > :not(style)':
            {
                fontSize: 50,
                minHeight: 50,
                textAlign: 'center',
                fontFamily: `'Red Hat Display'`,
            }
        }}>
            <Box id='box-old'>
                {checked
                    ? <h1 onMouseEnter={handleChange} style={{ color: "#1C1C1C" }}>{old}</h1>
                    : <></>
                }
                <Box id='box-new'>
                    <Collapse orientation="horizontal" in={!checked}>
                        {checked
                            ? <></>
                            : <h1 onMouseLeave={handleChange} onClick={() => contats()} style={{ color: "#00FF7F" }}>{novo}</h1>
                        }
                    </Collapse>
                </Box>
            </Box >
        </Box>
    );
}