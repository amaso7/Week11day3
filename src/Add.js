import { render } from '@testing-library/react'
import React, {Component} from 'react'

export class Add extends Component {
    constructor(){
        super()

        this.state = {
            title: "",
            genre: "",
            publisher: "",
            year: "",
            imgUrl: ""
        }
    }
    handleAddBook = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addBook = (e) => {
        let bookO = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imgUrl: this.state.imgUrl}
        fetch('http://localhost:3001/addBook', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookO)
        })
    }

render() {
    return <div>
        <h3>Add Book</h3>
        <label>Title</label>
        <input name= "title" type= "text" onChange={this.handleAddBook}/>
        <label>Genre</label>
        <input name= "genre" type= "text" onChange={this.handleAddBook}/>
        <label>publisher</label>
        <input name= "publisher" type= "text" onChange={this.handleAddBook}/>
        <label>Year</label>
        <input name= "year" type= "text" onChange={this.handleAddBook}/>
        <label>Img Url</label>
        <input name= "imgUrl" type= "text" onChange={this.handleAddBook}/>
        <button onClick={this.addBook}>Add</button>
    </div>
}
}