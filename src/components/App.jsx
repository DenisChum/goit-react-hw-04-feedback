import React, { Fragment, useState} from "react";
import Feedback from './Feedback/Feedback'
import SectionTitle from './SectionTitle/SectionTitle'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

// style
import { Container } from './App.styled'


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleIncrement = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
       return;
      
      default:
        return;
    }
  }
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage)
  }
    
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const variation = good > 0 || neutral > 0 || bad > 0;

    return (
      <Fragment>
        <Container>
        <SectionTitle title="Please leave Feedback">
        <Feedback 
            options={{ good, neutral, bad }}
            handleIncrement ={handleIncrement}
          />
        </SectionTitle>
        <SectionTitle title="Statictics">
          {!variation ?
            <Notification message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
            total={countTotalFeedback()}
            positiveTotal={countPositiveFeedbackPercentage()}              
        />}              
          </SectionTitle>
          </Container>
    </Fragment>)
  }

export default App;