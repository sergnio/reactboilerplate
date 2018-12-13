/**
 *
 * Main
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

/* eslint-disable react/prefer-stateless-function */
export class Main extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Main</title>
          <meta name="description" content="Description of Main" />
        </Helmet>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Main);
