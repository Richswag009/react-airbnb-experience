import React, { Component } from 'react'
import logo from '../layout/logo192.png'


export default class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className='navbar bg-primary'>
                <h1 > <img src={logo} alt="" style={{width:'40px',dispaly:'block'}} />React</h1>
                <ul className='px-2'>
                    <li>Pricing </li>
                    <li>About </li>
                    <li>Contact </li>
                </ul>
                </nav>     
            </div>
        )
    }
}
