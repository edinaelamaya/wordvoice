import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Login = React.lazy(()=> import('../components/login/login'))
const Colors = React.lazy(() => import('../views/theme/colors/Colors'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'home'},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/login', name: 'login', element: Login },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/base/accordion', name: 'Accordion', element: Accordion }
]

export default routes
