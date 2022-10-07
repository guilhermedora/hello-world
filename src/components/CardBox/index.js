import './styles.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pj } from '../../database'

function CardBox() {
    return (
        <div className='container-cardBox'>
            {pj.map((info) => (
                <Card className='card' key={info.title}>
                    <CardMedia
                        className='image-card'
                        component={info.component}
                        height={info.height}
                        image={`/cardIcons/${info.image}`}
                        alt={info.alt}
                    />
                    <CardContent>
                        <Typography className='title-card' gutterBottom variant="h5" component="div">
                            {info.title}
                        </Typography>
                        <Typography className='resume' variant="body2" color="text.secondary">
                            {info.resume}
                        </Typography>
                    </CardContent>
                    <CardActions className='btn-slot'>
                        <Button
                            className='btn-git' href={info.git} target="_blank"
                        >
                        </Button>
                        <Button
                            className='btn-deploy' href={info.deploy} target="_blank"
                        >
                        </Button>
                    </CardActions>
                </Card>
            ))
            }
        </div >
    )
}

export default CardBox