import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>I'd love to get in touch! I prefer a twitter DM but also feel free to email me if you'd like ❤</h3>
                <h1><a className="mail" href="mailto:matt@matthew-ball.com">matt@matthew-ball.com</a></h1>
                <Social />
            </div>
        )
    }
}

export default Contact
