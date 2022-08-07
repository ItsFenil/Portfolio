import React from 'react';
import IMG1 from '../../assets/Magic Notes.png';
import IMG2 from '../../assets/Awesome Quiz App.png';
import IMG3 from '../../assets/HotstarClone.png';
import IMG4 from '../../assets/RoboFriends.png';
import IMG5 from '../../assets/RPS.png';
import IMG6 from '../../assets/Background Generator.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'A website like Keep Notes',
      img: IMG1,
      description:
        'This website is build using Bootstrap, Js and Html. Here we can add a note with a title and the description and that note will show in the same page after adding it and we can also delete a note.',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://itsfenil.github.io/Magic-Notes/',
      github: 'https://github.com/ItsFenil/Magic-Notes',
    },
    {
      id: 2,
      title: 'RoboFriends',
      img: IMG4,
      description:
        "Roboto Friends React.js and API's. This is a simple web site were using API's we call different robot images and and we give each rotobo a name and after that we can search roboto as per it's name.",
      technologies: "React | RoboFriends API's",
      link: 'https://itsfenil.github.io/Roboto-Friend/',
      github: 'https://github.com/ItsFenil/Roboto-Friend',
    },
    {
      id: 3,
      title: 'Quiz Application with Timer',
      img: IMG2,
      description: 'This website is build using Html, Css and Js. Firstly all the rules will be display and a start quiz button after that quiz will start and there will be a 15 sec timer for each question and at the end it will display total right and wrong answer. ',
      technologies: 'HTML | CSS | JavaScript',
      link: 'https://itsfenil.github.io/ItsFenil-Quiz-Application-with-Timer-js/',
      github: 'https://github.com/ItsFenil/ItsFenil-Quiz-Application-with-Timer-js',
    },
    {
      id: 4,
      title: 'Responsive Disney Plus Hotstar Landing Page Clone',
      img: IMG3,
      description:
        'Responsive Disney Plus Hotstar Landing Page Clone',
      technologies: 'HTML | CSS | JavaScript | Bootstrap',
      link: 'https://itsfenil.github.io/Disney-Plus-Hotstar-Clone/',
      github: 'https://github.com/ItsFenil/Disney-Plus-Hotstar-Clone',
    },
    {
      id: 5,
      title: 'Rock Paper Scissors game',
      img: IMG5,
      description:
        'Rock paper scissors game build using HTML, CSS, JS. One player will be user and another player will be computer itself. Program will also count the number of win',
      technologies: 'HTML | CSS | JavaScript ',
      link: 'https://itsfenil.github.io/RockPaperscissors/',
      github: 'https://github.com/ItsFenil/RockPaperscissors',
    },
    {
      id: 6,
      title: 'Background Generator',
      img: IMG6,
      description:
        'This website is build using HTML, CSS and JS. We can generate different Gradient color by selecting 2 color and also get their color code using this site.',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://itsfenil.github.io/gradient-generator/',
      github: 'https://github.com/ItsFenil/gradient-generator',
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
