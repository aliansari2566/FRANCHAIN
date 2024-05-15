import React, { useState,useEffect } from 'react';



import Form from '../../components/Forms/ClientDetailsForm';
// import { Header } from 'antd/es/layout/layout';
import {  Layout, Col, Row  } from 'antd';
import { FormHeader } from '../../components/Header/FormHeader';
import SideBar from '../../components/SideBar';
import { AccountOpening } from '../../components/Forms/AccountOpening';
import ClientDetailsForm from '../../components/Forms/ClientDetailsForm';
import { useSearchContext } from '../../context/SearchContext';

import WelcomePng from "../../assets/images/welcome.png";
const { Content, } = Layout;
const Home = () => {
  const { setCurrentPage } = useSearchContext();

  useEffect(() => {
    setCurrentPage("Home`"); // Set the current page when component mounts
  }, []);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
  };

  return (
  
  <>

  <FormHeader/>

  <div className="homePage container" style={{ height: '92vh' }}>
        <Row justify="center" style={{ height: '-webkit-fill-available' }}>
          <Col className="loginleft" xs={24} sm={24} md={12} lg={6} xl={5}>
            <div className="container" style={{ height: '100%' }}>
              <SideBar handleMenuClick={handleMenuClick} />
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
            <div className="container" style={{ height: '100%' }}>
              {selectedMenuItem === 'AccountOpening' ? (
                <AccountOpening />
              ) : selectedMenuItem === 'ClientDetails' ? (
                <ClientDetailsForm /> // Render Client Details component here
              ) : (
                <div className='welcome'>
                    <img
                    src={WelcomePng}
                    alt={"logo"}
                    className="WelcomePng"
                    style={{ height: "auto" }}
                  />
                  <h1>Welcome to the</h1>
                  <p>National Investment Trust Online Unit Management System</p>


                </div> // Render other submenu components here
              )}
            </div>
          </Col>
        </Row>
      </div>

    
    </>
  );
}

export default Home;
