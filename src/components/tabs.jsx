import "./tabs.css";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="purple-text">Welcome Home</h1>
        <span>
          This is the home tab contant. Notice how we're using React children to
          pass content to the TabPanel component.
        </span>
        <ul>
          <li>React children allow flexable component composition</li>
          <li>Children can be any valid React element</li>
          <li>This makes components reusable and composable</li>
          <li>
            The props.children prop contains everything between component tags
          </li>
        </ul>
        <div className="notice">
          <span className="white">
            <strong>Key Concept:</strong>The TabPanel comonent recevies its
            cintent as children and displays it when the tab is active.
          </span>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <div className="home">
        <h2 className="purple-text">About Us</h2>
        <span>
          This tab demonstrates how children can contain complete JSX
          structures. The TabPanel component recevies these children and
          displays them when the tab is active.
        </span>
        <div className="notice">
          <h2>React Children Concepts:</h2>
          <ul>
            <li>
              <strong>Props.children</strong> - Special prop that content
              between component tags.
            </li>
            <li>
              <strong>Context API</strong>- Used here to share state between Tab
              components.
            </li>
            <li>
              <strong>Composion</strong>- Building complex Uls from simple,
              reusable components.
            </li>
          </ul>
          <span>
            Each TabPanel recives its content as children, making the tabs
            component flexable and reusable.
          </span>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="home">
        <h2 className="purple-text">Contact Us</h2>
        <form className="contact-form">
            <span>Get in touch with us using for below</span>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
            <label>Email</label>
            <input type="email" placeholder="youremail@example.com" />
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="home">
        <h2 className="purple-text">Services</h2>
        <span>Here are the services we offer:</span>
       <div className="row">
         <div className="services-content">
            <h2 className="purple-text">Service 1</h2>
            <span>Description of service one. This <br /> demonstrates how children can contain <br /> comlex structures.</span>
        </div>
        <div className="services-content">
            <h2 className="purple-text">Service 2</h2>
            <span>Description of service two. Each TabPanel <br /> can have different content structures.</span>
        </div>
        <div className="services-content">
            <h2 className="purple-text">Service 3</h2>
            <span>Description of service three. <br /> The children prop makes this all posible!</span>
        </div>
       </div>
      </div>
    </>
  );
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div className="tab-select">
        <button
          className={activeTab === "home" ? "active" : ""}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>

        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button
          className={activeTab === "services" ? "active" : ""}
          onClick={() => setActiveTab("services")}
        >
          Services
        </button>

        <button
          className={activeTab === "contact" ? "active" : ""}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      {activeTab === "home" && <Home />}
      {activeTab === "about" && <About />}
      {activeTab === "services" && <Services />}
      {activeTab === "contact" && <Contact />}
    </>
  );
}
