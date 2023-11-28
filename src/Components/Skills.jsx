import React, { useEffect, useState } from 'react';

function Progress({ value }) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animationDuration = 800;
    const step = value / (animationDuration / 10);

    let current = 0;

    const animation = setInterval(() => {
      if (current < value) {
        current += step;
        if (current > value) {
          current = value;
        }
        setCurrentValue(current);
      } else {
        setCurrentValue(value);
        clearInterval(animation);
      }
    }, 10);

    return () => {
      clearInterval(animation);
    };
  }, [value]);

  return (
    <progress max="100" value={currentValue}>
      {currentValue}%
    </progress>
  );
}

function Skills() {
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
                  <Progress value={skill.value} />
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
