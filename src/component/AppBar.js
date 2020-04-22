import React, {useEffect ,useState} from 'react';
import Drawer from './Drawer'
import CardView from './CardView'
import {Typography,Grid,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux' 
import {get,startCase} from 'lodash'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Main(props) {
  const classes = useStyles();
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
},[props.categories]);
  const restaurantList = get(props,'categories.restaurantList',[])
  const showMoreIcon = restaurantList.length > count*5
  return (
    <div className={classes.root}>
      <Grid container>
      <Grid item lg={3}>
       <Drawer />
      </Grid>
      <Grid item lg={9}>
      <Grid container >
         <Grid item sm = {12} style={{padding : 10}}>
         <Typography gutterBottom variant="h3" component="h2">
            {startCase(get(props,'categories.category',''))}
          </Typography>
         </Grid>
        {
          restaurantList.slice(0,showMoreIcon ? count*5 :restaurantList.length ).map(restaurant=> <Grid item xs={12} lg={4} style={{padding : 10}}>
            <CardView restaurant={restaurant}/>
            </Grid>)
        }
        { showMoreIcon && <Grid item xs={12} lg={4} style={{padding : 10}} onClick={()=>setCount(count +1)}>
        <Card style={{height : 350,display : 'flex' ,justifyContent : 'center',alignItems : 'center',backgroundColor : '#eeeeee'}}>
            <Typography gutterBottom variant="h2" component="body3">
               {`+${parseInt(restaurantList.length) - parseInt(count*5) } More`}
            </Typography>
        </Card>
      </Grid>}
      </Grid>
      

        
      </Grid>
   </Grid>
    </div>
  );
}


const mapStateToProps = (state) => ({
  isOpen: state.toggleDrawer,
  categories : state.categories
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type : 'select category',payload : category })

});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
