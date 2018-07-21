import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainLayout from './MainLayout'
import io from 'socket.io-client'

class index extends Component {
  constructor(props){
    super(props);
    console.log('get inside index constructor')
    this.state ={
      socket: io('http://localhost:3000/'),
      userMsg: ''
    }
    this.onSendMsg = this.onSendMsg.bind(this)
  }
  componentDidMount(){
    console.log('componentDidMount')
  }

  onSendMsg(){
    console.log('Emiting a msg to server');
    this.state.socket.emit('chatMsg', this.state.userMsg)

  }
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
                  <textarea className="form-control" name="" id="" placeholder='Enter some messages...' value={this.state.userMsg} onChange={(e)=>{this.setState({userMsg:e.target.value})}}></textarea>
                </div>
                <div className="col-2">
                  <button className='btn btn-success' onClick={()=>{console.log('asdfdsaffffffffffff');}}>Send</button>
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