import React from 'react';
import Navigation from './Navigation';
import './App.css';

const App = () => {
  return (
    <div>
      <Navigation />
      <div id="content">
        <section id="home">
          <img src={`${process.env.PUBLIC_URL}https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png`} alt="Home" />
          <h1>Home</h1>
          <p>Welcome to the home section.</p>
        </section>
        <section id="about">
          <img src={`${process.env.PUBLIC_URL}
https://th.bing.com/th/id/OIP.6j56QJYHHfRKDCYGG9qC9wAAAA?rs=1&pid=ImgDetMain`} alt="About" />
          <h1>About</h1>
          <p>Learn more about us in this section.</p>
        </section>
        <section id="services">
          <img src={`${process.env.PUBLIC_URL}https://www.educba.com/academy/wp-content/uploads/2016/02/Website-Services.jpg`} alt="Services" />
          <h1>Services</h1>
          <p>Discover our services here.</p>
        </section>
        <section id="contact">
          <img src={`${process.env.PUBLIC_URL}https://allmywebneeds.com/wp-content/uploads/2019/11/contact-us-page.jpeg`} alt="Contact" />
          <h1>Contact</h1>
          <p>Get in touch with us.</p>
        </section>
      </div>
    </div>
  );
};

export default App;
