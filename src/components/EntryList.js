import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EntryCard from './EntryCard';

const styles = {
  root: {
    marginTop: 20,
    padding: 50
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItem: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
};

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          id: 0,
          type: 0,
          title: "“苟利国家生死以”",
          desc: "The collection for the famous poem.",
        },
        {
          id: 1,
          type: 1,
          title: "Validate - “苟利国家生死以”",
          desc: "The validation for the collection for the famous poem.",
        },
      ]
    };
  }

  render() {
    const {classes} = this.props;
    const entries = this.state.entries;
    const cards = entries.map((entry) => (
      <EntryCard
        key={entry.id}
        type={entry.type}
        title={entry.title}
        desc={entry.desc}
      />
    ));
    return (
      <div className={classes.root}>
        <Typography variant="display1" align="left">Entry List</Typography>
        <div className={classes.container}>
          {cards}
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(EntryList);
