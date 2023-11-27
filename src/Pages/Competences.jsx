import React, { useEffect } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

function animateProgressBar(progress) {
  const targetValue = parseInt(progress.getAttribute('value'));
  const max = parseInt(progress.getAttribute('max'));
  const animationDuration = 800;
  const step = targetValue / (animationDuration / 10);

  let current = 0;

  const animation = setInterval(() => {
    if (current < targetValue) {
      current += step;
      if (current > targetValue) {
        current = targetValue;
      }
      progress.value = current;
    } else {
      progress.value = targetValue;
      clearInterval(animation);
    }
  }, 10);
}

function handleDivHover() {
  const progressBars = document.querySelectorAll('progress');
  progressBars.forEach((progress) => {
    animateProgressBar(progress);
  });
}

const competencesData = [
  {
    category: 'Front-end',
    skills: [
      { label: 'HTML/Css', value: 80 },
      { label: 'JS', value: 50 },
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { label: 'React', value: 15 },
      { label: 'Symfony', value: 20 },
      { label: 'PHP', value: 25 },
    ],
  },
  {
    category: 'Design UI UX',
    skills: [
      { label: 'Canva', value: 80 },
      { label: 'Figma', value: 70 },
      { label: 'Adobe XD', value: 50 },
    ],
  },
];

function Competences() {
  useEffect(() => {
    const divContainer = document.getElementById('bar_front');
    divContainer.addEventListener('mouseenter', handleDivHover);

    return () => {
      divContainer.removeEventListener('mouseenter', handleDivHover);
    };
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="content-skills" id="competences">
          <h1 style={{ marginTop: '6rem' }}>Compétences</h1>
          <div className="skills-container">
            <div className='content-other-skills'>
              <div>
                <h2>Expériences</h2>
                <ul>
                  <li>Autonomie</li>
                  <li>Travail d'équipe</li>
                  <li>Gestion de projets</li>
                </ul>
              </div>
              <div>
                <h2>Compétences</h2>
                <ul>
                  <li>Autonomie</li>
                  <li>Travail d'équipe</li>
                  <li>Gestion de projets</li>
                </ul>
              </div>
              <div>
                <h2>Mes Activités</h2>
                <ul>
                  <li>Danse</li>
                  <li>Musique</li>
                  <li>Basketball</li>
                </ul>
              </div>
              <a href="media/MBEMBA_Nhora_Developpeuse_d'application_multimédia.pdf" download="">
                <button className="roll-button" type="button">
                  Télécharger mon cv
                </button>
              </a>
            </div>
            <div className='skills'>
              <div id="bar_front" className="skill-bars">
                {competencesData.map((categoryData, index) => (
                  <div key={index}>
                    <p>
                      <strong>{categoryData.category}</strong>
                    </p>
                    {categoryData.skills.map((skill, skillIndex) => (
                      <React.Fragment key={skillIndex}>
                        <label htmlFor={`file_${index}_${skillIndex}`}>{skill.label}</label>
                        <progress id={`file_${index}_${skillIndex}`} max="100" value={skill.value}>
                          {skill.value}%
                        </progress>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Competences;
