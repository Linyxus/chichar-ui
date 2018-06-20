import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IntroCard from './IntroCard';

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItem: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
};

const IntroTable = (props) => {
  const {classes} = props;
  return (
    <div className={classes.container}>
      <IntroCard
        title="What's Chichar?"
        content="Chichar stands for Chinese Character. Project Chichar is a project to collect hand-written chinese characters." />
      <IntroCard
        title="What's for?"
        content="Chichar is meant to create an easy-to-use dataset for Machine Learning projects. The projects using data of Chichar will be listed." />
      <IntroCard
        title="Contribution"
        content="We need contribution in terms of the collection and validation. You can contribute us in ways listed below." />
    </div>
  );
};

export default withStyles(styles)(IntroTable);
