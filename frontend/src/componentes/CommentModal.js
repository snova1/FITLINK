import React, { useState } from 'react';
import '../hojas-de-estilo/CommentModal.css';

function CommentModal({ onClose, onCommentSubmit }) {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (stars > 0) {
      // Llama a la función onCommentSubmit con la calificación y el comentario
      onCommentSubmit(comment, stars);
      // Muestra el mensaje de éxito
      setSuccessMessage('¡Calificación y comentario agregados con éxito!');
      // Cierra el modal después de enviar el comentario
      onClose();
    } else {
      alert('Por favor, selecciona al menos una estrella.');
    }
  };

  return (
    <div className="comment-modal-overlay">
      <div className="comment-modal">
        <h2>Deja tu comentario</h2>
        {/* Formulario para dejar un comentario */}
        <form onSubmit={handleSubmit}>
          {/* Selección de estrellas */}
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= stars ? 'star active' : 'star'}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          {/* Textarea para el comentario */}
          <textarea
            placeholder="Escribe tu comentario aquí (Opcional)"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <button type="submit">Enviar comentario</button>
        </form>
        {/* Mensaje de éxito */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {/* Botón para cerrar el modal */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default CommentModal;
