

import {useState, useEffect} from "react"
// import axios from "axios"
// import { PARTIDOSCREADOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { CContainer , CCardBody, CRow, CCol } from '@coreui/react'
import { PartidoCard } from "../../components/PartidosCreados/PartidoCard";
import partidosCreados from '../../connections/datapartidoscreados'; 
import { HojaEnBlanco } from "../../components/hojablanco/hojablanco";
import {DocumentCard} from "../../components/carddocument/document_list"
import annyang from 'annyang';


const PartidosCreados= ()=>{
    
    return (
        <CContainer  className="mt-3 mb-3">
            <HojaEnBlanco />
        </CContainer >
        )
}

export default PartidosCreados

