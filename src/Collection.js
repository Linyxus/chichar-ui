import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    marginTop: 30,
    marginLeft: 20
  }
};

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Entry #${props.match.params.id}`,
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="display2" className={classes.title}>
          {this.state.title}
        </Typography>
      </div>
    );
  }
};

export default withStyles(styles)(Collection);  