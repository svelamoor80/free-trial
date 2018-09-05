import React, { Component } from 'react';
import { AgencyContainer } from './AgencyContainer';
import { CustomerList } from './CustomerList';
import { Footer } from './Footer';
import { PlanContent } from './PlanContent';
import { RenderCard } from './RenderCard';
import SwitchPlan from './SwitchPlan';
import './App.css';
import './SwitchPlan.css';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <a href="http://www.teikametrics.com">Link to Teikametrics</a>
    </div>
  );
};

class App extends Component {
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
        <div className="largeSpacer"></div>
        <SwitchPlan toggleSwitch={this.toggleSwitch} switched={this.state.switched} />
        <RenderCard switched={this.state.switched} />
        <AgencyContainer switched={this.state.switched} />
        <PlanContent />
        <CustomerList />
        <Footer />
      </div>
    )
  }
}


export default App;
export {
  Contact
}









