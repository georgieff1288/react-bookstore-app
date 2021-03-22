import { Component } from 'react';
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header/Header'

import style from './App.module.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={style.app}>
                <Header />

            </div>
        );
    };
;}

// function App() {
//     return (
//         <h1>Bookstore app</h1>
//     );
// }

export default App;
