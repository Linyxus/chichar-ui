import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 450,
    maxWidth: 450,
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function EntryCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            { props.type ? 'Validation' : 'Collection' }
          </Typography>
          <Typography variant="headline" component="h2">
            { props.title }
          </Typography>
          <Typography component="p">
            { props.desc }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Enter</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(EntryCard);
