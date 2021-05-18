import React, { useContext } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Search = () => {
    const {search, setSearch} = useContext(UserContext);
    const { handleSubmit, register } = useForm();
    

    const onSubmit = data => {
        data.isSearched = true ;
        setSearch(data)
    }
    return (
        <>
            <Card className="mt-5" style={{ background: "#EFEFEF", borderRadius: "10px" }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control  type="text" placeholder="From" defaultValue={search.From} {...register("From")} required  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control  type="text" placeholder="To" defaultValue={search.To} {...register("To")} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control name="date"  type="date" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                                Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
};

export default Search;