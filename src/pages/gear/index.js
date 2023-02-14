import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import "./style.css";

export const Gear = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Gear</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My gears</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h4 className="color_sec">Camera</h4>
            <ul className="gear_list_style">
              <li className="color_sec fs-5">Sony A7iii</li>
            </ul>
            <h4 className="color_sec ">Lens</h4>
            <ul className="gear_list_style">
              <li className="color_sec fs-5">50mm f/1.8 Sony</li>
              <li className="color_sec fs-5">85mm f/1.8 Viltrox</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
