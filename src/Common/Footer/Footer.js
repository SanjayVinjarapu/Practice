import React from 'react';
import { useEffect } from 'react';
import '../../index.css';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const body = document.body;
  const element = document.getElementById('footer')
  const hasScrollbar = body.scrollHeight > body.clientHeight;
  if(hasScrollbar){
    console.log("has scroolbAr")
    element.style.position ='static';
  }
  else{
    console.log("not having scroolbAr")
    element.style.position ='fixed';
  }
   
  }, []);
  
  return (
    <footer className="text-white py-4 main-footer bg-dark" id="footer">
      <div className="container">
        <div className="row" style={{color:'white'}}>
          <div className="col-md-4"  >
            <h5>Company Name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, City, Country</li>
              <li>Email: info@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
