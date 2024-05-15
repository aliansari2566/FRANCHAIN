import React , {useContext,useState, useEffect} from "react";

import { Button, Form, Input, Col, Row, message } from "antd";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../../assets/logo/loginLogo.png";
import { post } from "../../api/index";
import CryptoJS from 'crypto-js';
import { loginRoute, PRIVATE_KEY } from '../../helper/AppConstants';



import { AuthContext } from "../../context/AuthProvider";
import axios_api from "../../helper/newAxiosConfig";





const Login = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { updateLoginState } = useContext(AuthContext);



  

const onFinish = async (values) => {
  try {
    // Validate form fields
    await form.validateFields();
    const { username, password } = values;
   console.log(values)
   
  } catch (error) {
    // Handle errors
    console.error("Error submitting form:", error);
    message.error("An error occurred while processing your request.");
  }
};


  return (
    <>
    
        <div className="Login">
        <Row justify="center">
          <Col className="loginright" xs={24} sm={24} md={20} lg={20} xl={20}>
            <div className="container">
              <div className="FormOutter">
                <Form
                  layout="vertical"
                  form={form}
                  id="login_form"
                  name="login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <img
                    src={LoginLogo}
                    alt={"logo"}
                    className="LogoImage"
                    style={{ height: "auto" }}
                  />
                  <h2 className="LoginHeading">Sign in</h2>
             
  
                  <Form.Item
                    label="User ID"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your User ID!",
                      },
                    ]}
                  >
                    <Input
                      className="LoginInput"
                   
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input.Password 
                      className="LoginInput"
                      
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  
     
  
                  <Form.Item>
                    <a className="login-form-forgot" href="/">
                      Forgot password
                    </a>
                  </Form.Item>
  
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      
      </div>
    
  

    </>
  );
};
export default  Login;