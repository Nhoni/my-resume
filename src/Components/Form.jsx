import React, { useState } from 'react';
import { Icon } from '@iconify/react';
function Form() {
  // Utilisation de useState pour gérer les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fonction pour mettre à jour l'état lorsqu'un champ du formulaire change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert(`Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div className="bg">
      <div className="container" id="formulaire">
        
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom* :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email* :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message* :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Envoyer</button>

          <div className="foot_form">
            <span>
            <Icon icon="gg:mail" color="white" width="24" /> Mail: nhmbemba@gmail.com
            </span>
          </div>
          <div className="icon-outline">
          <a style={{marginRight:'1rem'}} href="https://www.linkedin.com/in/nhora-mbemba-b878b2207" target="_blank"><Icon icon="simple-icons:linkedin" color="white" width="32" /></a>
          <a  href="https://github.com/Nhoni" target="_blank"><Icon icon="mdi:github" color="white" width="32" /></a>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
