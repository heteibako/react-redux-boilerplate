import React from 'react';
import { connect } from 'react-redux';

const Landing = () => {
  return <div>React Redux Boilerplate</div>;
};

const mapStateToProps = (state) => ({
  selectedCompetition: state.competition.selectedCompetition,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  results: state.result,
});

export default connect(mapStateToProps, {})(Landing);
