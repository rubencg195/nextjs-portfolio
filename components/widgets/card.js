import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ProfileCard = ({cardWidth, cardHeight}) => {
    return <Card sx={{ maxWidth: cardWidth }}>
          <CardMedia
            sx={{ height: cardHeight }}
            image="https://www.laprensa.hn/binrepository/600x400/0c0/0d0/none/11004/ANNE/km-drone_2_.1_LP1004811_MG67347516.jpg"
            title="About Me"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About Me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am an entrepreneur, an engineer, and a defender of social justice. As a result, I decided to work on projects that were not only innovative technically speaking, but that also had a big social impact. Thanks to these projects I won three national awards and became a member of the YouthActionNet and the YLAI Program.
            </Typography> <br/>
            <Typography variant="body2" color="text.secondary">
              I’m a mechatronics engineer and I’m currently studying for my MSc. degree in Computer Science. I’m interested in robotics, machine learning, automation and efficient ways of solving social and environmental problems using technology.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
}

export default ProfileCard;