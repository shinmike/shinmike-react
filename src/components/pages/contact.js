import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Contact</h1>
        <p>If you’d like to chat, feel free to send me an <a className="hover-black" href="mailto:shinmike90@gmail.com">email</a>.</p>

        <p>I’m active on <a className="hover-black" href="http://github.com/shinmike">GitHub</a>, <a className="hover-black" href="http://linkedin.com/in/shinmike">LinkedIn</a>, <a className="hover-black" href="http://instagram.com/shinmike">Instagram</a>.</p>
      </div>
    );
  }
}

export default Contact;