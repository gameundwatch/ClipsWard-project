import React, { PropsWithChildren, useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import '../css/App.css'


interface SocialAccount {
  Name: string,
  Id: string
}

class SocialAccountPanel extends React.Component<SocialAccount, {}>{
  render() {
    return (
      <div className='socialid'>
        {this.props.Id == '' ? this.props.Name: this.props.Id}
      </div>
    )
  }
}

function APItwitter () {
  
}

async function post () {
  postTwitter();
}

async function postTwitter (url='', data={}) {
  const response = await fetch(url ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

//==================
// MAIN APPLICATION
//==================

interface AppState {
  Service: SocialAccount[];
}

class AppComponent extends React.Component<{}, AppState> {

  videoURL = '';
  constructor(props: {}) {
    super(props);
    this.state = {
      Service: [
      {
        Name: 'Twitter',
        Id: ''
      },
      {
        Name: 'Instagram',
        Id: ''
      },
      {
        Name: 'YouTube',
        Id: ''
      }
    ]};
  }

  setId = (n: number, i: string) => {
    const item = this.state.Service;
    item[n].Id = i;
    this.setState({Service: item});
  }

  render() {
    return (
      <div className='App'>
        <h1>ClipsWard - Shortmovie multipost tool -</h1>
        <div className='MovPlayer'>
          {/* VIDEO PREVIEW */}
        </div>
        <div className='Message'>
          {/* TEXTBOX PREIVEW */}
          <textarea placeholder='description...'></textarea>
        </div>
          <button className='smallButton' onClick={() => post()}><span className='buttonText'>Post!</span></button>
        <div id='socials'>
          <div className='social'>
            <button onClick={() => { console.log('called'); this.setId(0,'aaa') }}><FaTwitter /></button>
            <SocialAccountPanel Name='Twitter' Id={this.state.Service[0].Id} />
          </div>
          <div className='social'>
            <button onClick={() => { console.log('called'); this.setId(1,'bbb') }}><FaInstagram /></button>
            <SocialAccountPanel Name='Instagram' Id={this.state.Service[1].Id} />
          </div>
          <div className='social'>
            <button onClick={() => { console.log('called'); this.setId(2,'ccc') }}><FaYoutube /></button>
            <SocialAccountPanel Name='Youtube' Id={this.state.Service[2].Id} />
          </div>
        </div>
      </div>
    )
  }
}

export default AppComponent
