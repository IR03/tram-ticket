import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fakedata from '../../Fakedata/Fakedata.json'
import Ticket from '../Ticket/Ticket';

const Home = () => {

    const [tickets, setTickets] = useState([]);
    useEffect(() => setTickets(Fakedata), []);
    // console.log(tickets);

    return (
        <>
           <Container className="mt-5 align-items-center d-flex">
               <Row>
                  {
                      tickets.map(ticket => <Ticket ticket={ticket}></Ticket>)
                  }
               </Row>
           </Container>
        </>
    );
};

export default Home;