import React from 'react';
import {  Card, CardGroup} from 'react-bootstrap';
import { Grid, Button  } from '@mui/material';


function orderCards() {
    return (
        <div style={{marginTop: "10px"}}>
                <CardGroup>
                  <div>
                    <Card style={{height:"280px", marginTop: "0px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} >
                                <Card.Img variant="top" style={{height: "250px", width: "250px", marginTop: "10px"}} src="https://images.unsplash.com/photo-1600326145359-3a44909d1a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
                            </Grid>
                            <Grid item xs={9} >
                                <Card.Body>
                                    <Card.Title>Noodles</Card.Title>
                                    <Card.Text>
                                        <p>₹150</p>
                                        <p>Description</p>
                                        <p>This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        <Button
                                            type="submit"
                                            size = "small"
                                            variant="contained"
                                            // href = {props.to}
                                            sx={{ maxWidth: 2 ,mt: 1, mb: 2, ml:1, bgcolor:"success.main" }}
                                            >
                                            {/* {props.status} */}
                                            Add +
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Grid>
                        </Grid>
                    </Card>
                  </div>
                  <div>
                    <Card style={{height:"280px", marginTop: "10px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} >
                                <Card.Img variant="top" style={{height: "250px", width: "250px", marginTop: "10px"}} src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" />
                            </Grid>
                            <Grid item xs={9} >
                                <Card.Body>
                                    <Card.Title>Eggs</Card.Title>
                                    <Card.Text>
                                        <p>₹100</p>
                                        <p>Description</p>
                                        <p>This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        <Button
                                            type="submit"
                                            size = "small"
                                            variant="contained"
                                            // href = {props.to}
                                            sx={{ maxWidth: 2 ,mt: 1, mb: 2, ml:1, bgcolor:"success.main" }}
                                            >
                                            {/* {props.status} */}
                                            Add +
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Grid>
                        </Grid>
                    </Card>
                  </div>
                  <div>
                    <Card style={{height:"280px", marginTop: "10px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} >
                                <Card.Img variant="top" style={{height: "250px", width: "250px", marginTop: "10px"}} src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" />
                            </Grid>
                            <Grid item xs={9} >
                                <Card.Body>
                                    <Card.Title>Sandwich with blueberries</Card.Title>
                                    <Card.Text>
                                        <p>₹200</p>
                                        <p>Description</p>
                                        <p>This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                        <Button
                                            type="submit"
                                            size = "small"
                                            variant="contained"
                                            // href = {props.to}
                                            sx={{ maxWidth: 2 ,mt: 1, mb: 2, ml:1, bgcolor:"success.main" }}
                                            >
                                            {/* {props.status} */}
                                            Add +
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Grid>
                        </Grid>
                    </Card>
                  </div>
                  </CardGroup>
                </div>
    )
}

export default orderCards
