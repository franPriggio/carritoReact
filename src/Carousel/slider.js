import React from "react";
import { Carousel, Image, Col } from "react-bootstrap";

const GaleriaImagenes = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Col>
          <Image src="https://picsum.photos/200/300?grayscale" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Col>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://picsum.photos/200/300?grayscale" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://picsum.photos/200/300?grayscale" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default GaleriaImagenes;
