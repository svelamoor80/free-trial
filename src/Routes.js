import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App, { Contact } from './App';
import { Plan } from './PlanConfirmationComponent';

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            switched: false
        };
        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched
            };
        });
    }

    render() {
        return (
            <div>
                <Route
                    exact path="/"
                    render={(props) => <App {...props} switched={this.state.switched} />}
                />
                <Route path="/plan/:plan" component={Plan} />
                <Route path="/contact" component={Contact} />
            </div>
        )
    }
}
export {
    Routes
}
