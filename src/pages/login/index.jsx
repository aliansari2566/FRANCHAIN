import React from "react";
import {Col, Row} from "antd";

import { DynamicHeader } from "../../components/DynamicHeader";
import Image from "../../assets/svg/screenImage.svg";


const Login = () => {
  
  return (
    <>
      <div className="Login">
        <div className="content-container">
          <DynamicHeader buttonText="Sign in" />
          <Row justify="center" className="container-row">
            <Col className="loginLeft" xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="loginLeftcontent">
                <div className="ImageContainer">
                  <img
                    src={Image}
                    alt={"userLogo"}
                    className="ScreenImage"

                  />
                </div>
                <h4>
                  Royalty collections, simplified. It’s next level!
                </h4>
                <p>Revenue based invoice collection to make royalty collection as easy as...</p>

              </div>
            </Col>
            <Col className="loginRight" xs={24} sm={24} md={12} lg={12} xl={12}>
            
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Login;
