import React from 'react';
import ReactDom from 'react-dom';
//import DisplayElement from "./app/components/DisplayElement";
//import './app/styles/style.css'
import Users from './app/components/Users';

const USERS = ['Anna', 'Olga', 'Kot', 'Anton'];

ReactDom.render ( <Users items={USERS}/>, document.getElementById('root'));
