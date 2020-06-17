// import React from 'react';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Bakeoff from '../Pages/Bakeoff/Bakeoff';


const routes = [
    {
        name: 'FORSIDE',
        path: '/',
        exact: true,
        component: Home
    },
    {
        name: 'LOGIN',
        path: '/About',
        exact: true,
        component: About
    },
    {
        name: 'KONTAKT',
        path: '/Contact',
        exact: true,
        component: Contact
    },
    {
        name: 'PRODUKTER',
        path: '/Bakeoff',
        exact: true,
        component: Bakeoff
    }
];

export default routes;