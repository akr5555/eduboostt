import React, { useEffect, useState } from "react";
import "./style.css";
import $ from "jquery";
import logo from "../components/images/logo2.JPEG";
import menuClose from "../components/images/close.PNG";
import menuBtn from "../components/images/menu.PNG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

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

  const [showServices, setShowServices] = useState(false);

  const toggleServices = (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    setShowServices(!showServices);
  };

  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <div className="navbar">
            <ul>
              <img id="menu-close" src={menuClose} alt="" />
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="./">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  href="https://surveyheart.com/form/6686c8d524bae747d6146720"
                  target="_blank"
                >
                  Feedback
                </a>
              </li>
            </ul>
            <Link className="lgb" to="/profile">
              {currentUser ? (
                <img
                  className="l-img"
                  src={currentUser.profilePicture}
                  alt="profile"
                />
              ) : (
                <button className="login-btn">Login</button>
              )}
            </Link>
            <img id="menu-btn" src={menuBtn} alt="" />
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>
            <b>| EDUBOOST |</b>
            <br />
            Empowering Education with Technology
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
            reiciendis ratione obcaecati? Nisi, dolore consequatur alias
            adipisci unde eaque! Corrupti, beatae officia dolorem alias eos
            repellat quisquam voluptate quidem!
          </p>
          <div className="btn">
            <a className="blue" href="#">
              Learn More
            </a>
            <a className="yellow" href="#">
              Visit Courses
            </a>
          </div>
        </section>

        <section id="services">
        <div className="dashboards">
              <div className="dashboard">
              <a href="/student"><h3><center>Student Dashboard</center></h3></a>
                {/* Content specific to Student Dashboard */}
              </div>
              <div className="dashboard">
                <h3><center>Staff Dashboard</center></h3>
                {/* Content specific to Staff Dashboard */}
              </div>
              <div className="dashboard">
                <h3><center>Admin Dashboard</center></h3>
                {/* Content specific to Admin Dashboard */}
              </div>
            </div>

          <div className="services-component">
            <div className="services-section"><hr/><br/>
              <h2><center>Our Services</center></h2>
              <div className="services-list">
                <ol>
                  <li>
                    <b>Course Assessment Tracking</b>
                    <ul>
                      <li>
                        Monitor chapters completed and identify those remaining.
                      </li>
                      <li>
                        Ensure teachers and students stay on track with the
                        curriculum.
                      </li>
                    </ul>
                  </li>
                  <li>
                  <b>Comprehensive Student Information System</b>
                    {showServices && (
                      <ul>
                        <li>
                          Past & Current Grades: Easily access historical and
                          current academic performance.
                        </li>
                        <li>
                          Improvement Areas: Pinpoint specific areas where each
                          student can improve.
                        </li>
                        <li>
                          Data Visualization: Utilize graphs and pie charts to
                          represent student progress.
                        </li>
                        <li>
                          Unique Code Access: Secure, personalized access for
                          each student and parent.
                        </li>
                        <li>
                          24/7 Data Analysis: Get real-time insights through our
                          WhatsApp bot.
                        </li>
                        <li>
                          Upcoming Exams: Stay informed about upcoming
                          examinations.
                        </li>
                        <li>
                          Weekly Test Scores Analysis: Regular updates on
                          student performance in weekly tests.
                        </li>
                        <li>
                          Fee Payment Management: Track accounts and receive
                          automatic reminders for payments.
                        </li>
                        <li>
                          Attendance Tracking: Monitor present and absent
                          percentages.
                        </li>
                        <li>
                          Direct Results Communication: Send results directly to
                          parents for immediate feedback.
                        </li>
                        <li>
                          Read-Only Access: Provide secure read-only access to
                          students and parents.
                        </li>
                        <li>
                          Class Performance Comparison: Compare section-wise
                          student performance across classes.
                        </li>
                        <li>
                          Macro-Level Progress Reports: Deliver comprehensive
                          progress reports to school heads for strategic
                          insights.
                        </li>
                      </ul>
                    )}
                    {!showServices ? (
                      <p className="read-more">
                        <a href="#" onClick={toggleServices}>
                          Read More
                        </a>
                      </p>
                    ) : (
                      <p className="show-less">
                        <a href="#" onClick={toggleServices}>
                          Show Less
                        </a>
                      </p>
                    )}
                  </li>
                </ol>
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
            <p>
              Email:{" "}
              <a href="mailto:eduboostcontact@gmail.com">
                eduboostcontact@gmail.com
              </a>
            </p>
            <p>Phone: +919304073384</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
