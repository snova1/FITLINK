import React from 'react';
import '../hojas-de-estilo/ComentModal.css';

function CommentModal({ onClose }) {
  return (
    <div className="comment-modal-overlay">
      <div className="comment-modal">
        <h2>Deja tu comentario</h2>
        {/* Formulario para dejar un comentario */}
        <form>
          <textarea placeholder="Escribe tu comentario aquí"></textarea>
          <button>Enviar comentario</button>
        </form>
        {/* Botón para cerrar el modal */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default CommentModal;

