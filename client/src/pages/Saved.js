import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SavedBooks from "../components/SavedBooks"

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))

    };

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    };

    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                
                    <SavedBooks savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
               
            </Container>
        );
    }
}



export default Saved; 