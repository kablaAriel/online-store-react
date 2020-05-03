import React from 'react'
import CartBtn from './CartBtn'
const tiktak = require('../img/tiktak.jpg')

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <a className="navbar-brand" href="/" >
                    <img
                        alt="תיק-תק"
                        src={tiktak}
                        height= "100px"
                        width= "100px"
                   />
                </a>
                <CartBtn />
            </nav>
        );
    }
}