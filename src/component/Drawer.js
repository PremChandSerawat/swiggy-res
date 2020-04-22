import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from 'react-redux' 
import {categoriesObject} from '../constant/comman'
import {startCase} from 'lodash'
import { Card } from '@material-ui/core';

function SideBar(props) {

  return (
          <Card style ={{height : '100%'}}>
            <List>
              {Object.keys(categoriesObject).map(category=> <ListItem button key={category} onClick={()=>props.selectCategory(category)} >
              <ListItemText primary={startCase(category)} />
            </ListItem>)}
         </List>
          </Card>
  );
}


const mapStateToProps = (state) => ({
  categories : state.categories
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type : 'select category',payload : category })
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);