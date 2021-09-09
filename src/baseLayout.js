import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Menu extends Component {
    render() {
        return <ul>
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/books">Books</NavLink></li>
            <li><NavLink to = "/addBook">add Book</NavLink></li>
        </ul>
    }
}
export class baseLayout extends Component {
    render() {
        return(
            <form>
                <Menu/>
                {this.props.children}
            </form>
        )
    }
}