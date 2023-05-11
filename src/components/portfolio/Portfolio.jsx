import React from 'react';
import IMG1 from '../../assets/aadisolution.png';
import IMG2 from '../../assets/cryptohunter.png';
import IMG3 from '../../assets/restaurant.png';
import IMG4 from '../../assets/weatherApp.png';
import IMG5 from '../../assets/phoenix.png';
import IMG6 from '../../assets/Todo mern.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 6,
      title: 'Aadi Solution',
      img: IMG1,
      description:
        "I designed AADI Solution's logo, built their website from scratch using HTML and CSS, created and managed their social media pages, and received positive feedback from the client.",
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://aadisolution.com',
      github: 'https://github.com/ItsFenil',
    },
    {
      id: 5,
      title: 'Phoenix House of Publication',
      img: IMG5,
      description:
        'I helped Phoenix House of Publication create their online presence by designing their logo, renaming the company, and developing a responsive website from scratch using HTML, CSS, and other tools.',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://pheonixhouseofpublication.co.in/',
      github: 'https://github.com/ItsFenil',
    },
    {
      id: 2,
      title: 'Responsive Todo list',
      img: IMG6,
      description:
        'It Streamline your to-do list with user-friendly web application. You can Quickly add, mark and delete tasks for maximum productivity.',
      technologies: 'MongoDB | Express JS | React JS | Node JS (MERN)',
      link: 'https://drive.google.com/file/d/1XMRnJxAMiFGQaAPXq_ubw4LsBHJ4tPTE/view?usp=share_link',
      github: 'https://github.com/ItsFenil/Todo-List-Mern',
    },
    {
      id: 3,
      title: 'Crypto Hunter',
      img: IMG2,
      description: 'Track crypto prices in real-time with our comprehensive tracker. View all cryptocurrencies, their rank, price, and market cap, along with graphical charts of price history in USD and INR. Stay informed with up-to-date 24-hour, 30-day, 3-month, and 1-year price movements.',
      technologies: 'React JS | Material UI | Chart JS | Coingecko api',
      link: 'https://crypto-hunter-react.netlify.app/',
      github: 'https://github.com/ItsFenil/Crypto-Tracker',
    },
    {
      id: 4,
      title: 'Gericht Restaurant UI/UX',
      img: IMG3,
      description:
        'Created a visually stunning and user-friendly UI/UX design for a restaurant website, elevating the online dining experience for customers with seamless navigation and a modern aesthetic.',
      technologies: 'React JS',
      link: 'https://itsfenil.github.io/restaurant-UIUX/',
      github: 'https://github.com/ItsFenil/restaurant-UIUX',
    },
    {
      id: 1,
      title: 'Weather App',
      img: IMG4,
      description:
        "This website is build using Openweathermap api, we can search weather of any location using this website and it will return its temperature, mist/sunny/cloudy/haze, Humidity, Wind Speed",
      technologies: "Openweathermap api | React JS",
      link: 'https://shorturl.at/rxyRZ',
      github: 'https://github.com/ItsFenil/Real-Time-Chatting-Web-Application-Snappy',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
