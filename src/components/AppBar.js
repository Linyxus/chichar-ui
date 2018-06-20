import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  text: {
    flexGrow: 1
  }
}

const MyAppBar = (props) => {
  const {classes} = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.text}>
            Project Chichar
          </Typography>
          <Button color="inherit" onClick={() => {window.location="https://github.com/Linyxus/chichar-ui"}}>github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(MyAppBar);
