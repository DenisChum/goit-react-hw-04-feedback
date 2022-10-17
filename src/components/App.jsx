import React, { Fragment, Component } from "react";
import Feedback from './Feedback/Feedback'
import SectionTitle from './SectionTitle/SectionTitle'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

// style
import { Container } from './App.styled'



class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage)
  }
    
  countTotalFeedback = () =>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  handleIncrement = event => {
    this.setState(state => {
      return { [event]: state[event] + 1 };
    });
    console.log(event);
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const variation = good > 0 || bad > 0 || neutral > 0;
    return (
      <Fragment>
        <Container>
        <SectionTitle title="Please leave Feedback">
        <Feedback 
            options={this.state}
            handleIncrement={this.handleIncrement}
          />
        </SectionTitle>
        <SectionTitle title="Statictics">
          {!variation ? <Notification message='No feedback given'></Notification> :  <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            total={this.countTotalFeedback()}
            positiveTotal={this.countPositiveFeedbackPercentage()} 
        />}
          </SectionTitle>
          </Container>
      </Fragment>
      )
  }

}

export default App;
