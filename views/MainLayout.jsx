import React, { Component } from 'react'
// import io from 'socket.io-client'

export default class index extends Component {
  // constructor(props){
  //   super(props);
  //   let socket = io('http://localhost:3000');
  // }
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossOrigin="anonymous"/>
        {/* <script src="/socket.io/socket.io.js"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `var socket = io();`
          }}
        /> */}
      </head>
      <body>{this.props.children}</body>
    </html>
    )
  }
}
