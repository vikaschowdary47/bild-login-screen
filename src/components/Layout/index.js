import React from "react";
import { Col, Row } from "react-bootstrap";
import DetailContainer from "../DetailContainer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Row className={classes.container}>
        <Col md={6}>
          <DetailContainer />
        </Col>
        <Col md={6}>{children}</Col>
      </Row>
    </>
  );
};

export default Layout;
