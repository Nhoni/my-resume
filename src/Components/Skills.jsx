import React, { useEffect } from 'react';

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
      { label: 'HTML', value: 80 },
      { label: 'CSS', value: 80 },
      { label: 'JS', value: 50 },
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { label: 'Symfony', value: 35 },
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

function Skills() {
  useEffect(() => {
    const divContainer = document.getElementById('bar_front');
    divContainer.addEventListener('mouseenter', handleDivHover);

    return () => {
      divContainer.removeEventListener('mouseenter', handleDivHover);
    };
  }, []);

  return (
    <div className="content_competences" id="competences">
      <div className="competences-section">
        <div className='content'> 

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

          <a href="src\assets\img\ressources\MBEMBA_Nhora_Developpeuse_d'application_multimédia.pdf" download="">
            <button className="roll-button" type="button">
              Télécharger mon cv
            </button>
          </a>
      </div>
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
  );
}

export default Skills;
