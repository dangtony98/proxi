import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const PATH = '';

function App() {
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState('');

  const onPress = (e) => {
    // signup pressed
    e.preventDefault();
    
    if (email.trim() != '') {
      // case: email is not empty

      axios.post('https://evening-falls-10614.herokuapp.com/signup1', {
        email
      })
      .then(function (response) {
        setError('');
        setEmail('');
        setIsComplete(true);
      })
      .catch(function (error) {
        setError('Oops something went wrong! Please try re-entering your email again.');
      });
    }
  }

  return (
    <div>
      <div className="home-heading">
        <h1 className="color-primary">Proxi</h1>
      </div>
      <div className="home-body flex center-h">
        <div className="home-body-area">
          <h1>We help with providing proxy credit scores to micro-merchants</h1>
          <p className="marg-b-m">
            If you are a micro-merchant or small business owner looking to obtain a loan, we are here to
            help support your business needs by giving you a score that most optimally reflects your
            financial creditworthiness
          </p>
          <p>
            Enter your email below to learn more
          </p>
          <form className="flex">
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input flex-1 marg-r-xs"
              placeholder="josh@gmail.com"
              required
            />
            <button 
              className="button"
              onClick={onPress}
            >
              Sign up
            </button>
          </form>
          {isComplete && (
            <p>
              You're now on the waitlist! Someone on our team will reach out to you shortly.
            </p>
          )}
        </div>
        <div className="home-body-area">
          <img 
            src="https://images.unsplash.com/photo-1603039078583-13468e835b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
