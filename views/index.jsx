import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout'
class index extends Component {
  render() {
    return (
      <Layout>
        <h1>THis is text message</h1>
      </Layout>
    );
  }
}

index.propTypes = {

};

export default index;