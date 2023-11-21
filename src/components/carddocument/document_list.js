import React from 'react';
import docimg from '../../assets/images/documentos.png';
import './document.css';

function DocumentCard({ title, thumbnail, description, onClick }) {
    const documents = [
        {
          id: 1,
          title: 'Documento 1',
          thumbnail: 'URL de la miniatura 1',
          description: 'Descripción del documento 1',
        },
        {
          id: 2,
          title: 'Documento 2',
          thumbnail: 'URL de la miniatura 2',
          description: 'Descripción del documento 2',
        },
        {
          id: 3,
          title: 'Documento 3',
          thumbnail: 'URL de la miniatura 3',
          description: 'Descripción del documento 3',
        },
        {
          id: 4,
          title: 'Documento 4',
          thumbnail: 'URL de la miniatura 4',
          description: 'Descripción del documento 4',
        },
        {
          id: 5,
          title: 'Documento 5',
          thumbnail: 'URL de la miniatura 5',
          description: 'Descripción del documento 5',
        },
        {
          id: 6,
          title: 'Documento 6',
          thumbnail: 'URL de la miniatura 6',
          description: 'Descripción del documento 6',
        },
      ];
  return (
    <div className="document-card">
        <div className='documentsflex'>

            <img src={docimg} alt="document" className="document-thumbnail" />
            <div className="document-info">
                <h3 className="document-title">{title}</h3>
                <p className="document-description">{description}</p>
                <button onClick={onClick}>Ver Documento</button>
        </div>
      </div>
    </div>
  );
}

export {DocumentCard};