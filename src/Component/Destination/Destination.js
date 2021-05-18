/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Search from '../Search/Search';
import SearchResult from '../Search/SearchResult';

const Destination = () => {
    const { search } = useContext(UserContext);
    return (
        <Container>
            <Row>
                <Col  md={4}>
                {search.isSearched ? <SearchResult/> : <Search />}
                </Col>
                <Col>
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29192.126012305216!2d90.38423724145002!3d23.853574410494694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x3755c6422bc83d21%3A0x3a1bc96ce9f8ad8b!2sKhilkhet%2C%20Dhaka!3m2!1d23.831122399999998!2d90.4243013!4m5!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!3m2!1d23.875854699999998!2d90.3795438!5e0!3m2!1sen!2sbd!4v1620324091040!5m2!1sen!2sbd`}
                        width="700"
                        height="550"
                        style={{ border:0, borderRadius: "10px"}}
                        allowfullscreen=""
                        loading="lazy">

                    </iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;