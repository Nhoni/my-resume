import React, { useState } from 'react';
import { Icon } from '@iconify/react';

// Définition du composant Form
function Form() {
  // État local pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // État local pour gérer les erreurs de validation
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si tous les champs sont remplis
    if (!formData.name || !formData.email || !formData.message) {
      setFormErrors({
        ...formErrors,
        name: formData.name ? '' : 'Le champ nom est requis.',
        email: formData.email ? '' : 'Le champ email est requis.',
        message: formData.message ? '' : 'Le champ message est requis.',
      });
      return;
    }

    // Vérifier si l'adresse e-mail est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormErrors({
        ...formErrors,
        email: 'Veuillez saisir une adresse e-mail valide.',
      });
      return;
    }

    // Affichez l'alerte avec le message de confirmation
    alert('Votre message a bien été envoyé!');

    // Réinitialisez le formulaire après la soumission réussie si nécessaire
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Réinitialisez les erreurs
    setFormErrors({
      name: '',
      email: '',
      message: '',
    });
  };

  // Rendu du composant Form
  return (
    <div className="bg">
      <div className="container" id="formulaire">
        {/* Formulaire avec gestionnaires d'événements */}
        <form id="contact-form" onSubmit={handleSubmit}>
          {/* Champ de saisie pour le nom */}
          <label htmlFor="name">Nom* :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <span className="error">{formErrors.name}</span>

          {/* Champ de saisie pour l'email */}
          <label htmlFor="email">Email* :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <span className="error">{formErrors.email}</span>

          {/* Champ de saisie pour le message (textarea) */}
          <label htmlFor="message">Message* :</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <span className="error">{formErrors.message}</span>

          {/* Bouton de soumission du formulaire */}
          <button type="submit">Envoyer</button>

          {/* Informations de contact et icônes sociales */}
          <div className="foot_form">
            <span>
              <Icon icon="gg:mail" color="white" width="24" /> Mail: nhmbemba@gmail.com
            </span>
          </div>
          <div className="icon-outline">
            <a style={{ marginRight: '1rem' }} href="https://www.linkedin.com/in/nhora-mbemba-b878b2207" target="_blank">
              <Icon icon="simple-icons:linkedin" color="white" width="32" />
            </a>
            <a href="https://github.com/Nhoni" target="_blank">
              <Icon icon="mdi:github" color="white" width="32" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

// Exportation du composant Form
export default Form;
