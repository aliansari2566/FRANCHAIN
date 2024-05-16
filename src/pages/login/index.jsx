import React, { useState }from "react";
import { Button, Form, Input, Col, Row, message } from "antd";

import { DynamicHeader } from "../../components/DynamicHeader";
import Image from "../../assets/svg/screenImage.svg";


const Login = () => {
  const [form] = Form.useForm();

  const [isButtonDisabled, setButtonDisabled] = useState(true); 
  const onFinish = async (values) => {
    try {
      await form.validateFields();
     
      console.log(values);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred while processing your request.");
    }
  };
  const handleValuesChange = (changedValues, allValues) => {
    // Check if any field is empty
    const isEmptyField = Object.values(allValues).some((value) => value === undefined || value === '');
    // Disable or enable button based on the presence of empty fields
    setButtonDisabled(isEmptyField);
  };
  return (
    <>
      <div className="Login">
        <div className="content-container">
          <DynamicHeader buttonText="Log in" />
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
