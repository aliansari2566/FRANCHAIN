import React, { useState,useEffect } from 'react';

import { Button, Form, Input, Col, Row, message } from "antd";



const Home = () => {
  

 

  return (
  
  <>



  <div className="homePage container" style={{ height: '92vh' }}>
        <Row justify="center" style={{ height: '-webkit-fill-available' }}>
          <Col className="loginleft" xs={24} sm={24} md={12} lg={6} xl={5}>
            <div className="container" style={{ height: '100%' }}>
        
            </div>
          </Col>

          <Col
            className="homePage-form-container"
            xs={24}
            sm={24}
            md={12}
            lg={18}
            xl={18}
            style={{ height: '100%' }}
          >
            
         
          </Col>
        </Row>
      </div>

    
    </>
  );
}

export default Home;
