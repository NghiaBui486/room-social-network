import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function AppCarousel(props) {
    const {data} = props;
    return (
        <Carousel  fade>
            {data.map(item => {
                return (
                    <Carousel.Item key={item.key} >
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={item.title? item.title : ''}
                        />
                        <Carousel.Caption>
                            <h3>{item.title? item.title : ''}</h3>
                            <p>{item.desc? item.desc : ''}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}
export default AppCarousel