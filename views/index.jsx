import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout'

class index extends Component {
  render() {
    return (
      <MainLayout>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className='mt-3 mb-3'>Chat app demo</h1>
              <div className="messagesContainer">
                <p>messages container</p>
              </div>
              <div className="inputContainer row mt-3 align-items-center">
                <div className="col-10">
                  <textarea className="form-control" name="" id="" placeholder='Enter some messages...'></textarea>
                </div>
                <div className="col-2">
                  <button className='btn btn-success'>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

index.propTypes = {

};

export default index;