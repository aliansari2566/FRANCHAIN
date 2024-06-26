import React, { useState } from "react";
import { Button, Form, Input, Col, Row, message } from "antd";

import { DynamicHeader } from "../../components/DynamicHeader";
import Image from "../../assets/svg/screenImage.svg";
import Select from "react-select";
import CountryFlag from "react-country-flag";
import countryOptions from "../../file/Countries";


const Signup = () => {
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

  const customSingleValue = ({ data }) => (
    <div>
      <CountryFlag countryCode={data.code} svg style={{ width: '1em', height: '1em' }} />
    
      {data.code}
    </div>
  );
  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps}>
        <CountryFlag countryCode={data.code} svg style={{ width: '1em', height: '1em' }} />
      
        {data.label}
      </div>
    );
  };


  return (
    <>
      <div className="Signup">
        <div className="content-container">
          <DynamicHeader buttonText="Log in" />
          <Row justify="center" className="container-row">
            <Col className="SignupLeft" xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="SignupLeftcontent">
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
                <p>Revenue based invoice collection to <br /> make royalty collection as easy as...</p>

              </div>
            </Col>
            <Col className="SignupRight" xs={24} sm={24} md={24} lg={12} xl={12}>
              <div className="FormOuter">
                <h3>Get started with Franchain </h3>
                <p className="formPara">Create an account in 5 minutes.</p>
                <Form
                  layout="vertical"
                  form={form}
                  id="Signup_form"
                  name="signup"
                  className="Signup-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onValuesChange={handleValuesChange}
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div  >
                        <Form.Item
                          label="First name"
                          name="firstname"
                          rules={[{ required: true, message: "Please input your first name" }]}
                        >
                          <Input className="SignupInput" />
                        </Form.Item>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div  >
                        <Form.Item
                          label="Last name"
                          name="lastname"
                          rules={[{ required: true, message: "Please input your last name" }]}
                        >
                          <Input className="SignupInput" />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>


                  <Form.Item
                    label="Business name and HQ location"
                    name="business"
                    className="selectItem"
                    rules={[{ required: true, message: "Please Enter your Business name" }]}
                  >
                    <Input className="SignupInput" />
                    <Select
                    className="countrySelect"
                    options={countryOptions}
                    
                    components={{ SingleValue: customSingleValue, Option: customOption }}
                   
                    defaultValue={countryOptions[0]} 
                  />
                  </Form.Item>
                 
                  
                  <Form.Item
                    label="Work email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                      },
                      {
                        type: "email",
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input className="SignupInput" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }, {
                      min: 12, message: "Password must be at least 12 characters"
                    }]}
                  >
                    <Input type="password" className="SignupInput" placeholder="Password" />

                  </Form.Item>


                  <Form.Item className="btn-item">
                    <Button type="primary" htmlType="submit" className="Signup-form-button" disabled={isButtonDisabled}>
                      Log in
                    </Button>
                  </Form.Item>

                  <p className="agreementPara" >
                    By clicking “Start Application“, I agree to Mercury’s <a href="https://mercury.com/legal/terms">Terms of Use</a>,
                    <a href="https://mercury.com/legal/privacy">Privacy Policy</a>  and to receive electronic communication about my
                    accounts and services per <a href="https://mercury.com/legal/esign">Mercury’s Electronic Communications Agreement</a>, and
                    acknowledge receipt of <a href="https://mercury.com/legal/patriot-act">Mercury’s USA PATRIOT Act disclosure.</a>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Signup;
