import React, { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
                <ul>
                    <NavItem item="Home" tolink="/" activec={this.activeitem}></NavItem>
                    <NavItem item="Contact" tolink="/contact" activec={this.activeitem}></NavItem>
                </ul>
            </nav>
        )
    }
}

export default Navbar