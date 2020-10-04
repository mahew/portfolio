import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="6x" /></a>
                <a href="https://Instagram.com/mahew_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="6x" /></a>
                <a href="https://Linkedin.com/in/mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="6x" /></a>
                <a href="https://medium.com/@mahew" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium} size="6x" /></a>
            </div>
        )
    }
}
export default Social