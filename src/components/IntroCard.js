import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 300,
    minHeight: 180,
    marginLeft: 50,
    marginTop: 20
  }
};

const IntroCard = (props) => {
  const {classes} = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="title">
            {props.title}
          </Typography>
          <br />
          <Typography variant="body1" align="center">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)(IntroCard);
