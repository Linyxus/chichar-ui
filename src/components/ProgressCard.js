import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';

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

function ProgressCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Current Progress
          </Typography>
          <LinearProgress variant="determinate" value={props.current} />
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to={`/collect/${props.id}`}>Contribute</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(ProgressCard);