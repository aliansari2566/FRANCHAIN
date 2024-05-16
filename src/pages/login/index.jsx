import React, { useState }from "react";
import { Button, Form, Input, Col, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import { DynamicHeader } from "../../components/DynamicHeader";
import Image from "../../assets/svg/screenImage.svg";


const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isButtonDisabled, setButtonDisabled] = useState(true); 
  const onFinish = async (values) => {
    try {
      await form.validateFields();
      const { username, password } = values;
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
          <DynamicHeader buttonText="Create Account" />
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
              <div className="FormOuter">
                <h3>Get started with Franchain </h3>
                <p>Create an account in 5 minutes.</p>
                <Form
                  layout="vertical"
                  form={form}
                  id="login_form"
                  name="login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="First name"
                    name="firstname"
                    rules={[{ required: true, message: "Please input your first name" }]}
                  >
                    <Input className="LoginInput" />
                  </Form.Item>
                  <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[{ required: true, message: "Please input your last name" }]}
                  >
                    <Input className="LoginInput" />
                  </Form.Item>
                  <Form.Item
                    label="Business name and HQ location"
                    name="business"
                    rules={[{ required: true, message: "Please Enter your Business name" }]}
                  >
                    <Input className="LoginInput" />
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
                    <Input className="LoginInput" />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your Password!" }, {
                      len: 12,
                      message: "Password must be at least 12 characters"
                    }]}
                  >
                    <Input  type="password"className="LoginInput" placeholder="Password" />
                 
                  </Form.Item>
                
                
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Login;
