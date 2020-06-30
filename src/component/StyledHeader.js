import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


const StyledHeader = styled.header`
  padding: 4em;
  background: papayawhip;
  height : 30px;
  background-color : blue;
`;

const StyledH1 = styled.h1`
   color : yellow
`;

const HeaderBar = ()=>{
  const classes = useStyles();
    return <StyledHeader>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
        <StyledH1 >
            Headding 
        </StyledH1>
    </StyledHeader>
}
export {
    HeaderBar
}

