import React from "react";
import { Row, Col } from "react-bootstrap";

const Leetcode = () => {
  return (
    <div>
      <Row className="justify-content-center" style={{ paddingBottom: "10px" }}>
        <Col xs={12} md={10} lg={8}>
          <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: 'center' }}>
            <strong className="yellow">LeetCode</strong> Stat
          </h1>
          <div style={{ width: "100%", textAlign: 'center' }}>
            <img
              src="https://leetcard.jacoblin.cool/Arkadyutichaudhuri?theme=dark&font=Syne%20Mono&ext=heatmap"
              alt="LeetCode Stats"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Leetcode;
