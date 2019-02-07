import React, {Component} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Header from './header/Header'

export default class Shell extends Component {
    render() {
        return(
            <Router>
                <Header AppName={this.props.AppName} />
            </Router>
        )
    }
}