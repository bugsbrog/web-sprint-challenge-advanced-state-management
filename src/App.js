import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props) => {
    const { fetchSmurfs } = props;
    fetchSmurfs();

        return (
            <div className="App">
                <Header />

                 <main>
                    <SmurfList/>
                    <AddForm/>
                 </main>
                </div>
        );
}

export default connect(null, { fetchSmurfs })(App);