import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const [images, setImages] = useState(shuffleArray(dataportfolio));
  const handleChangeTag = (tag) => {
    setImages(
      shuffleArray(dataportfolio).filter((image) => !tag || image.tag === tag)
    );
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-1 mb-4 pt-md-1 d-flex" style={{ gap: "0.2rem" }}>
          <Col className="col-auto">
            <div
              id="button_p"
              className="btn btn-light btn-sm po_btn"
              onClick={() => handleChangeTag("")}
            >
              All
            </div>
          </Col>
          <Col className="col-auto">
            <div
              id="button_p"
              className="btn btn-light btn-sm po_btn"
              onClick={() => handleChangeTag("cosplay")}
            >
              Cosplay
            </div>
          </Col>
          <Col className="col-auto">
            <div
              id="button_p"
              className="btn btn-light btn-sm po_btn"
              onClick={() => handleChangeTag("life")}
            >
              Life style
            </div>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho d-flex flex-wrap justify-content-start">
          {images.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <a href={data.img} target="_blank">
                  <img src={data.img} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
