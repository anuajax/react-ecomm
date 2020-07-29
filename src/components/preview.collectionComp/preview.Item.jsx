import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as LikeButton} from '../../assets/icons8-heart-outline-24.png';
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    width: 240,
    marginTop: 10
  },
  media : {
    height: 230
  }
});


const PreviewItem = ({name,price,imageUrl}) => {
    const classes = useStyles();
    return (
     
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">{name}</Typography>
            <Typography gutterBottom variant="h5" component="h4">${price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Add to Cart</Button>
         
          <Button size="small" color="primary">Add to fav</Button>
        </CardActions>
      </Card>
    );
}

export default PreviewItem;