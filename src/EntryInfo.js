import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProgressCard from './components/ProgressCard';
import DescCard from './components/DescCard';

const styles = {
  title: {
    marginTop: 30,
    marginLeft: 20
  }
};

class EntryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Entry #${props.match.params.id}`,
      current: 35,
      desc: "A collection for the famous poem."
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Typography variant="display2" className={classes.title}>
          {this.state.title}
        </Typography>
        <DescCard desc={this.state.desc} />
        <ProgressCard current={this.state.current} />
      </div>
    );
  }
};

export default withStyles(styles)(EntryInfo);