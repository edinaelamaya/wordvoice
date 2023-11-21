

import {useState, useEffect} from "react"
// import axios from "axios"
// import { PARTIDOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { CContainer , CCardBody, CRow, CCol } from '@coreui/react'
import { PartidoCard } from "../../components/PartidosCreados/PartidoCard";
import partidosCreados from '../../connections/datapartidoscreados'; 
import {DocumentCard} from "../../components/carddocument/document_list"
import annyang from 'annyang';


const DocumentosCard= ()=>{
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
        <CContainer  className="mt-3 mb-3">
            <div className="flexos">
            {documents.map((document) => (
                <DocumentCard
                key={document.id}
                title={document.title}
                thumbnail={document.thumbnail}
                description={document.description}
                />
            ))}
        </div>
        </CContainer >
        )
}

export default DocumentosCard

