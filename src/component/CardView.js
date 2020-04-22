import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography} from '@material-ui/core';
import {images} from '../constant/comman'
import { random,get} from 'lodash'
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 300,
  },
});

export default function RestorentLists(props) {
  const classes = useStyles();
  return (
          <Card >
              <CardMedia
                className={classes.media}
                image={images[random(9)]}
                title={get(props,'restaurant.name','')}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {get(props,'restaurant.name','')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {
                  get(props,'restaurant.food_types',[]).join(',')
                }
                </Typography>
              
              </CardContent>
              <div style={{display : 'flex',justifyContent : 'space-between',paddingRight: 15,paddingLeft : 15,paddingBottom : 20}}>
              <Rating
                value={get(props,'restaurant.ratings','')}
              />
              <Typography variant="body1" color="textSecondary" component="p">
                {
                  get(props,'restaurant.delivery_time','')
                }
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" style={{backgroundColor : '#69f0ae',padding : 5}}>
                {
                  `Price -${get(props,'restaurant.price_for_two','')}₹`
                }
                </Typography>
              </div>
        </Card>
  );
}

