import './App.css';
import Template from './template/Template';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import { Provider } from 'react-redux'
import store from './redux/store'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: '#362b66',
    backgroundImage: "-webkit-linear-gradient(left, #362b66 , #807b99)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Quicksand',
    fontSize: '28px',
    marginLeft: '20px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const classes = useStyles();
  const [title, setTitle] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      var path = window.location.protocol + '//' + window.location.host
      window.location.href = path + '/' + title;
    }
  }

  return (
    <div className="App">
      <Provider store={store}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h6" noWrap>FinProH8</Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyDown={handleKeyDown}
                onChange={event => setTitle(event.target.value)}
              />
            </div>
          </Toolbar>
        </AppBar>
        <BrowserRouter>
          <Switch>
            <Route path="/:searchTitle" component={(props) => <Template {...props} />} />
            <Template />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
