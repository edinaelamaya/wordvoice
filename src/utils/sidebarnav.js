import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilDrop,
  cilPuzzle,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavTitle,
    name: 'Objetos',
  },
  {
    component: CNavGroup,
    name: 'Figuras',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      }, 
      {
        component: CNavItem,
        name: 'Triángulo',
        to: '/base/triangulo',
        // Utiliza un icono personalizado para el triángulo
        icon: <i className="fas fa-play-circle"></i>, // Ejemplo con Font Awesome
      },
      {
        component: CNavItem,
        name: 'Círculo',
        to: '/base/circulo',
        // Utiliza un icono personalizado para el círculo
        icon: <i className="fas fa-circle"></i>, // Ejemplo con Font Awesome
      },
      {
        component: CNavItem,
        name: 'Cuadrado',
        to: '/base/cuadrado',
        // Utiliza un icono personalizado para el cuadrado
        icon: <i className="fas fa-square"></i>, // Ejemplo con Font Awesome
      },
    ],
  },
]

export default sidebarnav
