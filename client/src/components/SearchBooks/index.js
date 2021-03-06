import React from "react";
import "./style.css";
import { Row, Col } from "../Grid"

const SearchBooks = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Your Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Search Books</h3>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item" key={book._id}>
                                    <Row className="SearchBooks row" id={book.title + "Card"} >
                                        <Col size="2" className="bookImage">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol" />
                                        <Col size="9" className="bookInfo">

                                            <h3 className="bookTitle">{book.title}</h3>

                                            <h4 className="bookAuthor">{book.author}</h4>

                                            <p className="bookDescription">{book.description}</p>

                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row className="buttonDiv">
                                        <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a href={book.link} role="button" className="viewBook btn btn-success" target="_blank" >View</a>
                                    </Row>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
}

export default SearchBooks;