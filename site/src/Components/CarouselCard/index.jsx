import React from 'react';
import { Carousel, } from 'react-bootstrap';
import one from './../../assets/img/1.jpg';
import two from './../../assets/img/2.jpg';
import three from './../../assets/img/3.jpg';
// import main from './../../assets/img/main.png';
import { Container } from 'react-bootstrap';

function CarouselCard(props) {
    return (
        <Container style={{height: '400px'}}>
            <Carousel >
                <Carousel.Item interval={props.interval}>
                    <img
                    className="d-block w-100"
                    src={one}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={props.interval}>
                    <img
                    className="d-block w-100"
                    src={two}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={props.interval}>
                    <img
                    className="d-block w-100"
                    src={three}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
            
    )
}

export default CarouselCard;
