import React, { useEffect } from "react";
import "./style.css";
import $ from "jquery";
import logo from "../components/images/logo2.JPEG";
import menuClose from "../components/images/close.PNG";
import menuBtn from "../components/images/menu.PNG";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import aboutImage from "../components/images/regc.JPEG";
import feImage1 from "../components/images/fe1.PNG";
import feImage2 from "../components/images/fe2.PNG";

const About = () => {
  const { currentUser } = useSelector(state => state.user);

  useEffect(() => {
    $("#menu-btn").click(function () {
      $("#menu-btn").hide();
      $("nav .navbar ul").addClass("active");
    });

    $("#menu-close").click(function () {
      $("#menu-btn").show();
      $("nav .navbar ul").removeClass("active");
    });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <div className="navbar">
            <ul>
              <img id="menu-close" src={menuClose} alt=""/>
              <li>
                <a href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="active" href="/about">About</a>
              </li>
              <li>
                <a href="./">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="https://surveyheart.com/form/6686c8d524bae747d6146720" target="_blank">
                  Feedback
                </a>
              </li>
            </ul>
            <Link className="lgb" to="/profile">
              {currentUser ? (
              <img className='l-img' src={currentUser.profilePicture} alt='profile' />
            ):(
              <button className="login-btn">Login</button>
            )} 
            </Link>
            <img id="menu-btn" src={menuBtn} alt="" />
          </div>
        </nav>
      </header>

      {/* Home */}
      <main>
        <section id="about-home">
          <h2>About EDUBOOST .../</h2>
        </section>

        <section id="about-container">
          <div className="about-img">
            <img src={aboutImage} alt="" />
          </div>

          <div className="about-text">
            <h2>Welcome to EDUBOOST, Empower your Education with Technology</h2>
            <p>
              <b>About EduBoost</b>
              <br />
              EduBoost is a dynamic start-up dedicated to revolutionizing the
              educational landscape through innovative tech services tailored
              specifically for schools. Our mission is to enhance the
              educational experience for students, teachers, and administrators
              by providing comprehensive, real-time insights and tools that
              drive performance and improvement.
            </p>
            <div className="about-fe">
              <img src={feImage2} alt="" />
              <div className="fe-text">
                <h4>
                  <b>Incentives for Excellence</b>
                </h4>
                <p>
                  At EduBoost, we believe in fostering a spirit of healthy
                  competition and excellence. We will award a prize to the
                  best-performing class of the school, recognizing the class
                  that maintains an upward trend throughout the year.This
                  initiative not only motivates students but also encourages a
                  collaborative effort towards academic excellence.
                </p>
                <h4>
                  <b>Our Vision</b>
                </h4>
                <p>
                  EduBoost aims to significantly improve the overall performance
                  of schools by providing actionable data and insights. Our
                  platform is designed to support teachers, engage parents, and
                  empower students to reach their full potential.
                </p>
              </div>
            </div>
            <div className="about-fe">
              <img src={feImage1} alt="" />
              <div className="fe-text">
                <h4>
                  <b>Founder:</b>
                </h4>
                <p>
                  <i>
                    <b>Aadarsh Harshvardhan</b>
                  </i>
                  <br />
                  Contact:{" "}
                  <a href="mailto:eduboostcontact@gmail.com">
                    eduboostcontact@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer" id="contact">
        <div className="container2">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>Empowering Education with Technology.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:eduboostcontact@gmail.com">eduboostcontact@gmail.com</a></p>
            <p>Phone: +919304073384</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
