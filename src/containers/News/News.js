import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";

import { getNewsTrigger } from "core/actions/news";

const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsTrigger());
  }, []);
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" lg="12" xl="12">
          .col
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" lg="12" xl="12">
          .col
        </Col>
      </Row>
    </Container>
  );
};

export default News;
