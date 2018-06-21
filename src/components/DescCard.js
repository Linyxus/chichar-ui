import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function DescCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Description
          </Typography>
          <Typography variant="headline" align="center">
            {props.desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(DescCard);