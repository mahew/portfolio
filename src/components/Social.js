import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://twitter.com/@matt_jball" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://Linkedin.com/in/mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://medium.com/@mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} /></a>
            </div>
        )
    }
}
export default Social