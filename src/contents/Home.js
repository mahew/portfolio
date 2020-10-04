import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../img/matt.jpg';
import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profileImage} alt="profile of me!" className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I\'m Matt', 'Web Developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home
